import React from 'react';

import './index.scss';

import { ReactComponent as NxLogo } from '../assets/nx-logo-white.svg';
import { environment } from '../environments/environment';

import PageContainer from '../components/PageContainer';
import Section from '../components/Section';
import {MediaQueryProvider} from '@react-ui/media-query';

import {useWindowSize} from '../hooks/resize.effect';
import {useScrollHeight} from '../hooks/scroll.effect';

export const Index = () => {

  const size = useWindowSize();

  const scrollHeight = useScrollHeight();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <MediaQueryProvider>
      <div>width: {size.width}px</div>
      <div>height: {size.height}px</div>
      <div>scrollHeight: {scrollHeight}px</div>
      <PageContainer>
        <Section />
        <Section />
        <Section />
        <Section />
        
      </PageContainer>
    </MediaQueryProvider>
  );
};

export default Index;
