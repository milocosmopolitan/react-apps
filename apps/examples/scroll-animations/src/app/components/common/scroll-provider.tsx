import React, {createContext, useContext, useMemo, Dispatch, SetStateAction, ReactNode, ComponentType, ComponentClass, useEffect} from 'react';
// import useMedia from 'use-media';
import { ScrollHooks } from '../../services/scroll.hooks';
import { WindowUtils } from '../../services/utils';
// import { ScrollUtils } from '../../services/scroll.utils';
import {of, BehaviorSubject, Subject} from 'rxjs';
import { ScrollUtils } from '../../services/scroll.utils';

interface Props {
  children?: React.ReactNode;
  factor?: number;
  onScroll?: (e: any) => void;
}

interface ScrollContextValue {
  scrollY: number;
  scrolledPercent: number;
}

export const ScrollContext = createContext({
  scrollY: 0,
  scrolledPercent: 0
});

export const ObservableScrollContext = createContext({
  scrollY$: of(0),
  scrollPercent$: of(0),
});

export function useScrollContext() {
  return useContext(ScrollContext);
}

export function ObservableScrollProvider({children, factor, onScroll}: Props) {
  console.log('ObservableScrollProvider.Component');
  let ticking = false;

  const scrollY = new BehaviorSubject(0);
  const scrollPercent = new BehaviorSubject(0);

  const scrollY$ = of(scrollY.value);
  const scrollPercent$ = of(scrollPercent.value);

  const value = useMemo(
    () => ({scrollY$, scrollPercent$}),
    [ scrollY$, scrollPercent$ ]
  );

  function update() {
    // reset the tick so we can
    // capture the next onScroll
    ticking = false;
    scrollPercent.next(ScrollUtils.GetScrollPercentage());
    // scrollPercent = $(window).scrollTop() / (scrollDistance - $(window).height());
    // this.scrollY.next(ScrollUtils.GetScrollY());
    // setPercent(() => {
    //   const value = getPercent();
    //   // console.log('ScrollUtils.GetScrollPercent', value);
    //   return value;
    // });

    // scrollCallback();

    // this.scrollPercent.next(ScrollUtils.GetScrollPercentage());

    // previousScrollY = getPercent();
  }

  function updateScrollY() {
    scrollY.next(ScrollUtils.GetScrollY());

    // setYPos(() => {
    //   const value = getYPos();
    //   // console.log('ScrollUtils.GetScrollY', value);
    //   return value;
    // });
    requestTick();
  }

  function requestTick() {
    if(!ticking) { requestAnimationFrame(update); }
    ticking = true;
  }

  WindowUtils.OnScroll(updateScrollY);

  // useEffect(() => {
  //   // effect
  //   return () => {
  //     // cleanup
  //   }
  // }, []);

  return (
    <ObservableScrollContext.Provider value={value}>
      {children}
    </ObservableScrollContext.Provider>
  );
}

export function ScrollProvider({children, factor, onScroll}: Props) {
  console.log('ScrollProvider.Component');
  const [ scrolledPercent, setPercent, getPercent ] = ScrollHooks.UseScrollPercentage();
  const [ scrollY, setYPos, getYPos ] = ScrollHooks.UseScrollY();

  let previousScrollY = 0;
  
  let ticking = false;

  const value = useMemo(
    () => ({scrollY, scrolledPercent}),
    [ scrollY, scrolledPercent ]
  );

  function scrollCallback() {
    const eventObj = {
      previousScrollY,
      scrollY: getYPos(),
      scrolledPercent: getPercent(),
      scrollDirection: (getYPos() > previousScrollY) ? 'downward' : 'upward'
    };
    onScroll(eventObj);
  }

  function update() {
    // reset the tick so we can
    // capture the next onScroll
    ticking = false;
    // scrollPercent = $(window).scrollTop() / (scrollDistance - $(window).height());
    setPercent(() => {
      const value = getPercent();
      // console.log('ScrollUtils.GetScrollPercent', value);
      return value;
    });

    scrollCallback();

    previousScrollY = getPercent();

    // // For Green Sock API
    // var progressAction = percent * (factor || 1.05);

    // if (latestKnownScrollY > lastScrollTop) {  // downscroll
    //   TweenLite.to(action, 0, {progress:progressAction, ease: Power0.easeNone});
    // } else {
    //   TweenLite.to(action, 0, {progress:progressAction, ease: Power0.easeNone});
    // }
  }

  function updateScrollY() {

    setYPos(() => {
      const value = getYPos();
      // console.log('ScrollUtils.GetScrollY', value);
      return value;
    });
    requestTick();
  }

  function requestTick() {
    if(!ticking) { requestAnimationFrame(update); }
    ticking = true;
  }

  WindowUtils.OnScroll(updateScrollY);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

// interface WithScrollProviderOption {
//   debounce?: number;
// }

// HOC
export const WithScrollProvider = (Component) => (props: any) => {
  const {onScroll} = props;
  return (
    <ScrollProvider onScroll={onScroll}>
      <Component {...props} />
    </ScrollProvider>
  )
}

export const WithObservableProvider = (Component) => (props: any) => {
  console.log('WithObservableProvider');
  const {onScroll} = props;
  return (
    <ObservableScrollProvider onScroll={onScroll}>
      <Component {...props} />
    </ObservableScrollProvider>
  )
}
