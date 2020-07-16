import React from 'react';
import Box from '@material-ui/core/Box';
import AnimationBox from './components/animations/animation-box';
import { Controls, PlayState, Tween } from 'react-gsap';
import './app.scss';
import ScrollSandbox from './components/playgrorund/scroll-sandbox/scroll-sandbox';

const App = (props: any) => {


  // const {mobileView, prefersReducedMotion} = useMediaQueryContext();

  return (
    <ScrollSandbox onScroll={(e) => {
      
    }}>

      <Controls playState={PlayState.stop}>
        <Tween
          to={{ x: '200px', rotation: 180 }}
          duration={2} ease="back.out(1.7)">
          <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
        </Tween>
      </Controls>

      <AnimationBox
        bindScroll={true}
        offset={-300}
        styleFn={e =>({
          transform: `rotate(${e*100}deg)`
        })}
        id="test-class-name">
        <Box m="0" bgcolor="red" width="200px" height="100px" />
      </AnimationBox>

    </ScrollSandbox>
  );
};

export default App;
