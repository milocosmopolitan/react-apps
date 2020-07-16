import { useLayoutEffect, Ref, DependencyList, useState, RefObject } from 'react';

/**
 * Get DOM element bounding client rect
 */
export function useBoundingClientRect(ref: RefObject<HTMLElement>, deps: DependencyList = []) {
  const [rect, setRect] = useState({});
  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect())
  }, deps);
  return rect;
}
