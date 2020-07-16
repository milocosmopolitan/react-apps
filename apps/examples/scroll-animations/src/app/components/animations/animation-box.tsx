import React, {ReactNode, useState, useContext, useEffect, useLayoutEffect} from 'react';
// should this have dependencies?
import Box from '@material-ui/core/Box';
import { ElementUtils, WindowUtils } from '../../services/utils';
import { ScrollContext } from '../common/scroll-provider';
import { useAnimationFrame } from '../../hooks/animation.effect';
import {
  AnimationBoxClassNames,
  TransitionFunction,
  StyleFunction
} from './animation.types';
import { transitionFn } from './animation.utils';
import { Timeline } from 'react-gsap';
import { TweenMax, Expo } from 'gsap';


export interface AnimationBoxProps {
  id: string;
  classNames?: AnimationBoxClassNames;
  offset?: number;
  bindScroll?: boolean;

  length?: number;
  effectFunction?: () => void;
  children?: ReactNode;
  transition?: TransitionFunction;
  styleFn?: StyleFunction;
  // transition?: 'linear'|'ease'|'ease-in'|'ease-out'|'ease-in-out'| CubicBezierFn
}


export function scale(value: number) {
  return `scale(${value})`;
}

// helper functions
const MathUtils = {
  // map number x from range [a, b] to [c, d]
  map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
  // linear interpolation
  lerp: (a, b, n) => (1 - n) * a + n * b,
  // Random float
  getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
};

export default function AnimationBox(props: AnimationBoxProps) {

  console.log('AnimationBox.Component')

  // Timeline

  const { offset, transition, styleFn, id } = props;
  const scroll = useContext(ScrollContext);
  const [ dimensionRef, dimensions, node ] = ElementUtils.DimensionStateHook();
  const { top, bottom } = dimensions;

  // const [isVisible, setVisible] = useState(false);

  // const animationsStartAt: number = (top - (offset || 0));
  // const animationsEndsAt: number = (animationsStartAt + (length || bottom));
  // const animationLength = animationsEndsAt - animationsStartAt;
  // // const active = scroll.top > animationsStartAt && scroll.top < animationsEndsAt;

  // const animationPlayed = active ? (scroll.top - animationsStartAt) : 0;
  // const playedPercentage = animationPlayed / animationLength;

  // const [ active, setActive ] = useState(false);
  const [ frames, setFrames ] = useState({ startAt: null, endAt: null, length: 0 });
  const defaultAnimationLength = 500;
  const length = (props.length || defaultAnimationLength);

  const active = scroll.scrollY > frames.startAt && scroll.scrollY < frames.endAt;
  const played = active ? (scroll.scrollY - frames.startAt) : 0;
  let percentage = played / length;

  let isVisible = false;


  function layout() {

  }

  useEffect(() => {
    console.log('AnimationBox.Effect | Mount');
    console.log('@@@@@@@@@@@@@@', typeof dimensionRef, dimensionRef, typeof node, node)

    let observer: IntersectionObserver;
    if (node) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isVisible = entry.intersectionRatio > 0;
            // setVisible(() => entry.intersectionRatio > 0);

            console.log('entry', entry, isVisible, entry.intersectionRatio)
            
            // if ( entry.intersectionRatio > 0.5 ) {
            //     TweenMax.from(node, {
            //         transformOrigin: '0% 50%'
            //     });
            //     TweenMax.to(node, 0.9, {
            //         ease: Expo.easeOut,
            //         startAt: {opacity: 1, scaleX: 0},
            //         scaleX: 1
            //     });
            // }
            // else {
            //     TweenMax.from(node, {
            //         transformOrigin: '100% 50%'
            //     });
            //     TweenMax.to(node, 0.4, {
            //         ease: Expo.easeOut,
            //         scaleX: 0
            //     });
            // }
        });
      }, {
          threshold: [0,0.5]
      });
  
      observer.observe(node);
    }

    return () => {
      // cleanup
      console.log('AnimationBox.Effect | Cleanup');
      if (observer) observer.disconnect();
    }
  }, [node, isVisible])

  useLayoutEffect(() => {
    if (node) {
      console.log('AnimationBox.LayoutEffect', node, node.offsetTop, node.scrollTop)
      
      const startAt = (node.offsetTop + (offset || 0));
      const endAt = (node.offsetTop + (offset || 0)) + (props.length || defaultAnimationLength);
      
      


      setFrames({ startAt, endAt, length });
      // setPlayer({ played, percentage }); 
      console.log('frames', frames) 
    }
    
  }, [node]);

  useAnimationFrame(() => {
    // console.log('useAnimationFrame')
    if (node) {

      // const bezier = transition ? transition(percentage) : transitionFn.easeInCubic(percentage);

      // // node.style.transition = transitionFn ? transitionFn(percentage) : E;
      // // node.style.opacity = Math.min(window.scrollY / window.innerHeight, 1);
      // // node.style.left = Math.min(node.style.opacity * node.clientWidth, node.clientWidth - node.clientWidth).toString() + 'px';
      // // node.style = {...node.style, ...transitionFn(percentage)}

      // const transitionStyle = styleFn(bezier);
      // const transitionStyleKeys = Object.keys(transitionStyle);
      
      // for(let i = 0; i < transitionStyleKeys.length; i++ ) {
      //   node.style[transitionStyleKeys[i]] = transitionStyle[transitionStyleKeys[i]];
      //   // console.log(transitionStyleKeys[i], transitionStyle[transitionStyleKeys[i]], node.style[transitionStyleKeys[i]])
      // }

      // // console.log(node.style, transitionFn(percentage))

      
    }
    

  }, [node, percentage])
 
  // console.log('dimension', dimensionRef, dimensions, node &&node.offsetTop, scroll, animationsStartAt, animationLength, );
  return (
    <div ref={dimensionRef}>
      {/* <Timeline
        target={
          <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
        }
      ></Timeline> */}
      <Box bgcolor="blue" color="white" fontSize="14px">
        <div>
          {props.children}
        </div>
        <div>
        
          <div>id: {id}</div>
          <div>top: {top}</div>
          <div>bottom: {bottom}</div>
          <div>active: {String(active)}</div>
          <div>animationsStartAt: {frames.startAt}px</div>
          <div>animationsEndsAt: {frames.endAt}px</div>
          <div>animationPlayed: {played}px</div>
          <div>playedPercentage: {percentage * 100}%</div>
          {/* <div>exited: {exited}</div> */}
        </div>
      </Box>
    </div>
  )

}
