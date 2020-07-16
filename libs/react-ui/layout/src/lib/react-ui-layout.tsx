import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactUiLayoutProps {}

const StyledReactUiLayout = styled.div`
  color: pink;
`;

export const ReactUiLayout = (props: ReactUiLayoutProps) => {
  return (
    <StyledReactUiLayout>
      <h1>Welcome to react-ui-layout!</h1>
    </StyledReactUiLayout>
  );
};

export default ReactUiLayout;
