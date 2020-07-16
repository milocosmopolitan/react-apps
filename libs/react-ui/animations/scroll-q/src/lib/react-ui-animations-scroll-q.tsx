import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactUiAnimationsScrollQProps {
  children?: React.ReactNode;
  start?: number;
  end?: number;
  orientation?: 'vertical' | 'horizontal';
  

}

const FloatBox = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 300px;
  background: white;
  height: 150px;
`;

const StyledScrollQueueContainer = styled.div<ReactUiAnimationsScrollQProps>`
  display: flex;
  flex-direction: ${props => props.orientation === 'horizontal' ? 'row' : 'column'};
  overflow-x: ${props => props.orientation === 'horizontal' ? 'scroll' : 'none'};  
  position: relative;
`;

export const ScrollQueueContainer = (
  props: ReactUiAnimationsScrollQProps
) => {
  return (
    <StyledScrollQueueContainer>
      <div>
        <FloatBox>
          <div>start: {props.start}</div>
          <div>end: {props.end}</div>
          <div>orientation: {props.orientation}</div>
        </FloatBox>
        {props.children}
      </div>
    </StyledScrollQueueContainer>
  );
};

export default ScrollQueueContainer;
