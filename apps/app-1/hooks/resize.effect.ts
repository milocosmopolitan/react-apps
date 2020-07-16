import React from 'react';

/**
 * Window Resize Effect Hook
 */
export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);

  const handleResize = () => setWindowSize(getSize());

  React.useEffect(() => {
    if (!isClient) {
      return;
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
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
    // console.log( hasDocument && document.body && document.body.clientWidth)
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

  const [windowSize, setWindowSize] = React.useState(getSize);

  const handleResize = () => setWindowSize(getSize());

  React.useEffect(() => {
    if (!isClient) {
      return;
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
