import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useCountRenders } from '../shared/useCountRenders';
import { Square } from './square';

const ChildComponent = React.memo((props: any) => {
  const renders = useRef(0);
  useCountRenders();
  return (
    <>
      <button onClick={props.increment}>hello</button>
      <div>renders: {renders.current++}</div>
    </>
  )
});



export const UsingReactMemo = () => {
  const [count, setCount] = useState(0);

  const nums = [7, 21, 37];

  const increment = useCallback(
    (n = 1) => setCount( c => c + n),
    [setCount],
  )
  

  return (
    <div>
      <div>UsingReact.memo</div>
      <div>{count}</div>
      <ChildComponent increment={increment}></ChildComponent>
      {nums.map(n => (
        <Square key={n} n={n} onClick={() => increment(n)}></Square>
      ))}
    </div>
  );
}
