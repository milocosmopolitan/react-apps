import React from 'react';


/**
 * Window Scroll Effect Hook
 */
export const useScrollHeight = () => {
  const isClient = typeof window === 'object';
  const hasDocument = typeof document !== 'undefined';

  function getScrollHeight() {
    const top = hasDocument
      ? document.body.scrollTop || document.documentElement.scrollTop
      : 0;

    const height = hasDocument
      ? document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      : 0;

    // return (winScroll && height) ? winScroll / height : 0;

    return {
      top, height,
      scrolled: (top && height) ? top / height : 0
      // speed:   
    }
  }

  const [state, setScrollHeight] = React.useState(getScrollHeight);

  React.useEffect(() => {
    if (!isClient || !hasDocument) {
      return;
    }

    const handleScroll = () => setScrollHeight(getScrollHeight());

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return state;
}
