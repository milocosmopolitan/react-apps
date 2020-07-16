import React, { DependencyList } from 'react';

/**
 * Animation Frame Effect Hook
 * @param callback 
 */
export const useAnimationFrame = (callback, deps?: DependencyList) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef<any>();
  const previousTimeRef = React.useRef<any>();

  const animate = time => {
    // console.log(time)
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, (deps || [])); // Make sure the effect runs only once
}
