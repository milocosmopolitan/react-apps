import { useEffect, useLayoutEffect, useState } from 'react';
import { WindowUtils, DocumentUtils} from '../services/utils';

export function onResize (callback) {
  const _isClient = WindowUtils.IsClient();
  useEffect(() => {
    if (!_isClient) return;
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, []) // Empty array ensures that effect is only run on mount and unmount
}

/**
 * Window viewport size
 */
export function useViewSize() {
  const getViewSize = WindowUtils.GetViewSize;
  const [viewSize, setViewSize] = useState(getViewSize);
  return { viewSize, setViewSize, getViewSize }
}

/**
 * Document size
 */
export function useDocumentSize(from?: string) {
  const getDocumentSize = DocumentUtils.GetDocumentSize;
  const [documentSize, setDocumentSize] = useState(getDocumentSize);
  return { documentSize, setDocumentSize, getDocumentSize }
}


/**
 * Window Resize Effect Hook
 */
export const useResizeHook = () => {
  const isClient = typeof window === 'object';
  const hasDocument = typeof document === 'undefined' ? null : document;

  function getViewSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  function getDocumentSize() {
    console.log( hasDocument && document.body && document.body.clientHeight)
    return {
      width: hasDocument ? document.body && document.body.clientWidth : undefined,
      height: hasDocument ? document.body && document.body.clientHeight : undefined,
    }
  }

  function getSize() {
    return {
      window: getViewSize(),
      document: getDocumentSize()
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  const handleResize = () => setWindowSize(getSize());

  useEffect(() => {
    if (!isClient) {
      return;
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
