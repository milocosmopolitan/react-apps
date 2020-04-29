import React from 'react';
import styled from '@emotion/styled';
import {useMediaQueryContext} from '@react-ui/media-query';

export interface SectionProps {
  bg?: string;
  // children: any;
}

const StyledSection = styled.div`
  color: pink;
  background: blue;
`;

export const Section = (props: SectionProps) => {

  const {mobileView, prefersReducedMotion} = useMediaQueryContext();

  return (
    <StyledSection>
      <div className="content__item">
        <div className="content__item-imgwrap">
          <div className="content__item-img"></div>
        </div>
        <h2 className="content__item-title">Wa</h2>
        <p className="content__item-description">
          A little happy sunlight shining through there. In nature, dead trees are just as normal as live trees.
          <p>mobileView: {Boolean(mobileView).toString()}</p>
          <p>prefersReducedMotion: {Boolean(prefersReducedMotion).toString()}</p>
        </p>
        <div className="content__item-decobar"></div>
      </div>
    </StyledSection>
  );
}

export default Section;
