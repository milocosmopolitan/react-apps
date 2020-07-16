import React, { useEffect, useState, useRef } from 'react'
import { useCountRenders } from '../shared/useCountRenders';

const ChildComponent = ({increment}) => {
  const renders = useRef(0);
  useCountRenders();
  return (
    <>
      <button onClick={increment}>hello</button>
      <div>renders: {renders.current++}</div>
    </>
  )
}

export const UsingReactStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>UsingReactStateHook</div>
      <div>{count}</div>
      <ChildComponent increment={() => setCount(count+1)}></ChildComponent>
    </div>
  );
}
