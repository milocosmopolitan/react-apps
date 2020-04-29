import React, {createContext, useContext, useMemo} from 'react';
import useMedia from 'use-media';

interface Props {
  children: React.ReactNode;
}

export const MediaQueryContext = createContext(null);

const mediaQueries = {
  mobile: '(max-width: 767px)',
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',
};

export function MediaQueryProvider({children}: Props) {
  const mobileView = useMedia(mediaQueries.mobile);
  const prefersReducedMotion = useMedia(mediaQueries.prefersReducedMotion);
  const value = useMemo(() => ({mobileView, prefersReducedMotion}), [
    mobileView,
    prefersReducedMotion,
  ]);

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export function useMediaQueryContext() {
  return useContext(MediaQueryContext);
}
