import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {useWindowEventListener} from '@react-workspace/react-ui/common';

/** */
const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` }
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` }
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const updateDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const updateTranslateX = (ref, setTranslateX) => {
  const offsetTop = -ref.current.offsetTop;
  setTranslateX(offsetTop);
};

export default ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  useEffect(() => updateDynamicHeight(objectRef, setDynamicHeight), []);

  const onWindowResize = () => updateDynamicHeight(objectRef, setDynamicHeight);
  const onScrollChange = () => updateTranslateX(containerRef, setTranslateX);

  useWindowEventListener('resize', onWindowResize);
  useWindowEventListener('scroll', onScrollChange);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};
