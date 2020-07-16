import React from 'react';

import './index.scss';

import { ReactComponent as NxLogo } from '../assets/nx-logo-white.svg';
import { environment } from '../environments/environment';

import PageContainer from '../components/PageContainer';
import Section from '../components/Section';
import {MediaQueryProvider} from '@react-workspace/media-query';
import { ScrollQueueContainer } from '@react-workspace/scroll-q'

import {useResizeHook} from '../hooks/resize.effect';
import {useScrollHeight} from '../hooks/scroll.effect';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

import styled, { css } from 'styled-components';

const FloatBox = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  width: 300px;
  background: white;
  height: 150px;
`;



const GuideGrid = styled.div<{size: 10 | 100}>`
  background-image: url(${props => props.size && props.size + 'x' + props.size + '.png'});
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
`;

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ScrollViewBox = styled.div.attrs(props => ({
  className: 'scroll-view-box'
}))`
  position: relative;
  background: #AAA;
  width: 70vw;
  height: 100%;
  min-height: 500vh;
`;

const ScrollDocumentViewBox = styled.div.attrs(props => ({
  className: 'scroll-document-view-box'
}))`
  transform: scale(${props => props.zoom || 1});
  position: relative;
  background: white;
  height: 100%;
  min-height: 80vh;
`;

const ScrollDocumentToolBar = styled.div.attrs(props => ({
  className: 'scroll-document-tool-bar'
}))`
  position: fixed;
  width: 100%;
  background: red;
  height: 60px;
  z-index: 100;
`;

const ScrollDocumentGuide = styled.div`
  background: rgba(149,255,255,0.2);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const PropertyViewBox = styled.div`
  color: black;
  position: fixed;
  top: 60px;
  right: 0px;
  width: 30vw;
  height: 100vh;
`;

const PropertyContentBox = styled.div`
  padding: 30px;
  position: relative;
`;



export const Index = () => {

  const size = useResizeHook();

  const scrollHeight = useScrollHeight();
  
  const [zoom, setZoomValue] = React.useState('');

  const handleChange = (event) => {
    setZoomValue(event.target.value);
  };

  return (
    <MediaQueryProvider>
      <AppBar color="default" position="fixed">
        <FormControl>
          <InputLabel id="demo-simple-select-label">Zoom</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={zoom}
            onChange={handleChange}
          >
            <MenuItem value={0.5}>50%</MenuItem>
            <MenuItem value={0.75}>75%</MenuItem>
            <MenuItem value={1}>100%</MenuItem>
          </Select>
        </FormControl>
      </AppBar>
      <Box mt={60}>
        <Container>
          <ScrollViewBox>
            

            <ScrollDocumentViewBox zoom={zoom}>
              <ScrollDocumentGuide>
                <GuideGrid size={10}></GuideGrid>
                <GuideGrid size={100}></GuideGrid>
              </ScrollDocumentGuide>

              {/** THIS IS WHERE SCROLL ANIMATIONS ARE TESTED */}
              <ScrollQueueContainer>
                <div>TEST</div>
                <div>TEST</div>
                <div>TEST</div>
              </ScrollQueueContainer>

              <ScrollQueueContainer>
                <div>TEST</div>
                <div>TEST</div>
                <div>TEST</div>
              </ScrollQueueContainer>

            </ScrollDocumentViewBox>
            
          </ScrollViewBox>
          <PropertyViewBox>
            <PropertyContentBox>
              <div>zoom: {zoom}</div>
              <div>view width: {size.window && size.window.width}px</div>
              <div>view height: {size.window && size.window.height}px</div>
              <hr/>
              <div>document width: {size.document && size.document.width}px</div>
              <div>document height: {size.document && size.document.height}px</div>
              <hr/>
              <div>scrollHeight: {scrollHeight.top}px</div>
            </PropertyContentBox>
          </PropertyViewBox>
        </Container>
      </Box>
      
      

{/*       
      
      <PageContainer>
        <GuideGrid size={10}></GuideGrid>
        <GuideGrid size={100}></GuideGrid>
        <TestSection1>
          <ScrollQueueContainer>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
          </ScrollQueueContainer>
          
        </TestSection1>
        <Section />
        <Section />
        <Section />
        
      </PageContainer> */}
    </MediaQueryProvider>
  );
};

export default Index;
