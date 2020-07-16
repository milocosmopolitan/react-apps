import React, { useState, createContext, useContext, useMemo } from 'react';
import { WithScrollProvider, WithObservableProvider, useScrollContext } from '../../common/scroll-provider'
import { MediaQueryProvider } from '@react-workspace/media-query';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import {useViewSize, useDocumentSize} from '../../../hooks/resize.effect';
import { WindowUtils } from '../../../services/utils';
import { useDebounce } from '../../../hooks/debounce.hook';
import { makeStyles } from '@material-ui/core/styles';
import ScrollSandboxHeader from './scroll-sandbox-header';
import ScrollSandboxDrawer from './scroll-sandbox-drawer';

const useStyles = makeStyles({
  scene1: {
    fontSize: "48px"
  },
  effect1: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'pink',
  },
  visible: {
    background: 'blue'
  }
});


const ScrollDocumentViewBox = styled.div.attrs(props => ({
  className: 'scroll-document-view-box'
}))`
  transform: scale(${props => props.zoom || 1});
  position: relative;
  background: white;
  height: 100%;
  min-height: 80vh;
`;

const GuideGrid = styled.div<{size: 10 | 100}>`
  background-image: url(assets/${props => props.size && props.size + 'x' + props.size + '.png'});
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
`;


// export const ScrollSandboxContext = createContext({
//   showGuideGrid: false,
//   zoom: { label: '100%', value: 1 },  
// });

// export function useScrollSandboxContext() {
//   return useContext(ScrollSandboxContext);
// }

const ScrollSandbox = (props: any) => {

  const { children } = props;

  const classes = useStyles();

  /** Zoom Value */
  const [zoom, setZoomValue] = useState({ label: '100%', value: 1 });
  const { viewSize, setViewSize, getViewSize } = useViewSize();
  const { documentSize, setDocumentSize, getDocumentSize } = useDocumentSize();
  const { scrollY, scrolledPercent } = useScrollContext();
  const [ showGuideGrid, toggleGuideGrid ] = useState(true);
  const viewSizeStream = useDebounce(viewSize, 10000);

  // const value = useMemo(
  //   () => ({scrollY, scrolledPercent}),
  //   [ scrollY, scrolledPercent ]
  // );

  WindowUtils.OnLoad(() => {
    console.log('WindowUtils.OnLoad.callback');
    setDocumentSize(getDocumentSize);
  });

  WindowUtils.OnResize(() => {
    console.log('onResize', viewSizeStream);
    setViewSize(getViewSize);
    setDocumentSize(getDocumentSize);
  });

  return (
    <MediaQueryProvider>
      <ScrollSandboxHeader
        zoom={zoom}
        setZoomValue={setZoomValue}
        showGuideGrid={showGuideGrid}
        toggleGuideGrid={toggleGuideGrid}
      />

      <Box pt={'64px'} p={0} minHeight="500vh" height="100%"  display="flex">
        <Box m="0" bgcolor="#AAA" width="70vw" height="100%" position="relative">
          <ScrollDocumentViewBox zoom={zoom.value}>
            <Box className="document-guide" position="absolute" width="100%" height="100%" bgcolor="rgba(149,255,255,0.2)" display={(showGuideGrid ? 'block' : 'none')}>
              <GuideGrid size={10}></GuideGrid>
              <GuideGrid size={100}></GuideGrid>
            </Box>
            <Box className="document-content" bgcolor="white">
              <Box className={classes.scene1}>
                Scene1

                <Box className="effect-1" mt="200px">
                  {children}
                  {/* <Controls playState={PlayState.stop}>
                    <Tween to={{ x: '200px', rotation: 180 }} duration={2} ease="back.out(1.7)">
                      <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
                    </Tween>
                  </Controls>
                  <AnimationBox
                  bindScroll={true}
                  offset={-200}
                  styleFn={e =>({                      
                    transform: `rotate(${e*100}deg)`
                  })}>

                    <Box m="0" bgcolor="red" width="200px" height="100px" />
                  </AnimationBox> */}
                </Box>
              </Box>
            </Box>
          </ScrollDocumentViewBox>
        </Box>
        <Box bgcolor="white" width="30vw" height="100vh" position="fixed" right="0">
          <ScrollSandboxDrawer zoom={zoom} viewSize={viewSize} documentSize={documentSize} />
        </Box>
      </Box>
    </MediaQueryProvider>
    
  )
}

export default WithObservableProvider(ScrollSandbox);
