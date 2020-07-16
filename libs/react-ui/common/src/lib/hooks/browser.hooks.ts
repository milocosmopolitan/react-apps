import { useLayoutEffect, Ref, DependencyList, useState, RefObject, useEffect } from 'react';

const _isClient = () => typeof window !== 'undefined';

const _hasDocument = () => typeof document !== 'undefined';

const _getViewSize = () => _isClient()
  ? { width: window.innerWidth, height: window.innerHeight }
  : { width: undefined, height: undefined };

const _getDocumentSize = () => _hasDocument()
  ? { width: document.body.clientWidth, height: document.body.clientHeight }
  : { width: undefined, height: undefined }


/**
 * React hook for window event listener
 * to make sure that events are removed
 * when component is unmounted
 */
export function useWindowEventListener (eventKey: string, callback) {
  useEffect(() => {
    if (!_isClient()) return;
    window.addEventListener(eventKey, callback);
    return () => window.removeEventListener(eventKey, callback);
  }, []) // Empty array ensures that effect is only run on mount and unmount
}

  
// /** separated effect hook for singleton usage */
// export function onWindowLoad (callback) {
//   useEffect(() => {
//     if (!_isClient()) return;
//     window.addEventListener('load', callback);
//     return () => window.removeEventListener('load', callback);
//   }, []) // Empty array ensures that effect is only run on mount and unmount
// }

// export function onWindowResize (callback) {
//   useEffect(() => {
//     if (!_isClient()) return;
//     window.addEventListener('resize', callback);
//     return () => window.removeEventListener('resize', callback);
//   }, []) // Empty array ensures that effect is only run on mount and unmount
// }

// export function onScroll (callback) {

// }
