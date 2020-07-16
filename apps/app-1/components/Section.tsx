import React from 'react';
import styled from '@emotion/styled';
import {useMediaQueryContext} from '@react-workspace/media-query';

export interface SectionProps {
  bg?: string;
  children?: any;
}

const StyledSection = styled.div`
  background: rgba(149,255,255,0.2);
  padding 100px;
  // background: blue;
  height: 100vh;
`;

export const Section = (props: SectionProps) => {

  const {mobileView, prefersReducedMotion} = useMediaQueryContext();

  return (
    <StyledSection>
      {
        props.children ? props.children : (
          <div className="content__item">
            <div className="content__item-imgwrap">
              <div className="content__item-img"></div>
            </div>
            <h2 className="content__item-title">Wa</h2>
            <div className="content__item-description">
              A little happy sunlight shining through there. In nature, dead trees are just as normal as live trees.
              <p>mobileView: {Boolean(mobileView).toString()}</p>
              <p>prefersReducedMotion: {Boolean(prefersReducedMotion).toString()}</p>
            </div>
            <div className="content__item-decobar"></div>
          </div>
        )
      }
      
    </StyledSection>
  );
}

export default Section;
