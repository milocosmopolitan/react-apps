import React from 'react';

/* eslint-disable-next-line */
export interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider = (props: ScrollProviderProps) => {
  return (
    <div>
      <h1>Welcome to react-ui-scroll-provider component!</h1>
    </div>
  );
};

export default ScrollProvider;
