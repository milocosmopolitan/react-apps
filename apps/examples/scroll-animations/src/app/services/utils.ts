import { useEffect, useLayoutEffect, useState, DependencyList, useCallback } from 'react';
import { useAnimationFrame } from '../hooks/animation.effect';

// https://developer.mozilla.org/en-US/docs/Web/API/Window
export class WindowUtils {
  static IsClient = () => typeof window !== 'undefined';
  static GetViewSize = () => (
    WindowUtils.IsClient()
    ? { width: window.innerWidth, height: window.innerHeight }
    : { width: undefined, height: undefined }
  )

  /** React effect hook window load */
  static OnLoad = (callback, dependencies?: DependencyList) => {
    const _isClient = WindowUtils.IsClient()
    useEffect(() => {
      if (!_isClient) return;
      window.addEventListener('load', callback);

      return () => window.removeEventListener('load', callback);
    }, []) // Empty array ensures that effect is only run on mount and unmount

  }

  /** React effect hook window resize */
  static OnResize = (callback) => {
    const _isClient = WindowUtils.IsClient();
    useEffect(() => {
      if (!_isClient) return;
      window.addEventListener('resize', callback);
      return () => window.removeEventListener('resize', callback);
    }, []) // Empty array ensures that effect is only run on mount and unmount
  }

  /** React effect hook window scroll */
  static OnScroll = (callback) => {
    const _isClient = WindowUtils.IsClient();
    const _hasDocument = DocumentUtils.HasDocument();
    useEffect(() => {
      if (!_isClient || !_hasDocument) return;

      window.addEventListener('scroll', callback);
      return () => window.removeEventListener('scroll', callback);
    }, []) // Make sure the effect runs only once
  }
}

export class DocumentUtils {
  static HasDocument = () => typeof document !== 'undefined';
  static GetDocumentSize = () => (
    DocumentUtils.HasDocument()
    ? { width: document.body.clientWidth, height: document.body.clientHeight }
    : { width: undefined, height: undefined }
  )

  static GetScrollHeight = (element?: HTMLElement) => {
    const _hasDocument = DocumentUtils.HasDocument();
          element = element || document.body || document.documentElement;

    const top = _hasDocument
      ? element.scrollTop
      : 0;

    const height = _hasDocument
      ? element.scrollHeight - element.clientHeight
      : 0;

    // return (winScroll && height) ? winScroll / height : 0;

    return {
      top,
      height,
      scrolled: (top && height) ? top / height : 0
      // speed:   
    }
  }
}

interface IDimensionStateHookOption {
  watchResize?: boolean;
  watchScroll?: boolean;
}

export class ElementUtils {
  static GetDimension = (node: HTMLElement) => {
    // const rect = node.getBoundingClientRect();

    // console.log('node',node)
    return node && node.getBoundingClientRect();
  }

  // /** React effect hook window load */
  // static OnLoad = (node: HTMLElement, callback, dependencies?: DependencyList) => {
  //   console.log('ElementUtils.OnLoad', node)
  //   useEffect(() => {
  //     if (!node) return;
  //     node.addEventListener('load', callback);

  //     return () => node.removeEventListener('load', callback);
  //   }, []) // Empty array ensures that effect is only run on mount and unmount
  // }

  /** React state hook for dimension */
  static DimensionStateHook = (option?: IDimensionStateHookOption) => {
    const [dimensions, setDimensions] = useState({});
    const [node, setNode] = useState(null);

    const ref = useCallback(node => {
        setNode(node);
    }, []);

    const measure = () => window.requestAnimationFrame(() =>
      setDimensions(ElementUtils.GetDimension(node))
    );

    useLayoutEffect(() => {
      if (node) {
        measure();
      }
    }, [node]);

    if (option && option.watchResize) {
      WindowUtils.OnResize(() => { if (node) measure(); })
    }

    if (option && option.watchScroll) {
      WindowUtils.OnScroll(() => { if (node) measure(); })
    }
  
    return [ref, dimensions, node];
  }
}
