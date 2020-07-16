import React, { useEffect, useState } from 'react'
import { useState$ } from '../shared/observable-store-provider'

let ChildComponentInitCount = 0;
const ChildComponent = (props) => {
  ChildComponentInitCount++
  return (
    <div>
      <div>Child Init count : {ChildComponentInitCount}</div>
      <div>Parent state change count : {props.parentStateChanged}</div>
    </div>
  )
}

const initialState = {
  stateChanged: 0,
}

let UsingReactObservableInitCount = 0;
export const UsingReactObservable = () => {
  UsingReactObservableInitCount

  const [state$, setState, getState] = useState$(initialState);
  let state = getState();
  const callback = () => {
    console.log('callback', state)
    setState({stateChanged: state.stateChanged + 1})
  };

  

  useEffect(() => {
    const sub = state$.subscribe(newState => {
      // state = newState;
      console.log('UsingReactObservable.sub', newState);  
    });
    const increment = setInterval(callback, 1000);
    return () => {
      clearInterval(increment);
      sub.unsubscribe();
    };
  }, [])

  return (
    <div>
      <div>UsingReactObservable</div>
      <div>Init count : {UsingReactObservableInitCount}</div>
      <div>State change count : {state.stateChanged}</div>
      <ChildComponent parentStateChanged={state.stateChanged}></ChildComponent>
    </div>
  );
}
