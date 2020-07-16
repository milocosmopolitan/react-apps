import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactUiCommonProps {}

const StyledReactUiCommon = styled.div`
  color: pink;
`;

export const ReactUiCommon = (props: ReactUiCommonProps) => {
  return (
    <StyledReactUiCommon>
      <h1>Welcome to react-ui-common!</h1>
    </StyledReactUiCommon>
  );
};

export default ReactUiCommon;
