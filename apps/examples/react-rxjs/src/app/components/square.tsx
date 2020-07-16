import React, { useRef } from 'react'
import { useCountRenders } from '../shared/useCountRenders';


export const Square = React.memo((props: any) => {
  const renders = useRef(0);
  useCountRenders();
  return (
    <>
      <button onClick={props.onClick}>{props.n}</button>
    </>
  ) 
})
