import React from 'react';
import styled from '@emotion/styled';
import { useAnimationFrame } from '../hooks/animation.effect';

export interface PageContainerProps {
  bg?: string;
  children: any;
}

const StyledPageContainer = styled.div`
  color: pink;
  background: blue;
`;

export const PageContainer = (props: PageContainerProps) => {
  const [count, setCount] = React.useState(0)

  useAnimationFrame(deltaTime => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setCount(prevCount => (prevCount + deltaTime * 0.01) % 100)
  })

  return (
    <StyledPageContainer>
      <div>{Math.round(count)}</div>
      <div data-scroll>
        {props.children}
      </div>
    </StyledPageContainer>
  );
}

export default PageContainer;
