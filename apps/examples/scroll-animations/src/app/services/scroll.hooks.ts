// import { Subject } from 'rxjs';
import { useState, Dispatch, SetStateAction } from 'react';
import { ScrollUtils } from './scroll.utils';

// common type

type StateHookOutput<State = any> = [
  State,
  Dispatch<SetStateAction<State>>
];

type StateHookOutputWithGetter<State = any> = [
  State,
  Dispatch<SetStateAction<State>>,
  () => State
];

type StateHook<State = any> = () => StateHookOutput<State> | StateHookOutputWithGetter<State>;


/** Scroll Hooks for React */
export class ScrollHooks {
  static UseScrollY: StateHook = () => {
    const [value, set] = useState(ScrollUtils.GetScrollY);
    return [value, set, ScrollUtils.GetScrollY];
  }

  static UseScrollPercentage: StateHook = () => {
    const [value, set] = useState(ScrollUtils.GetScrollPercentage);
    return [value, set, ScrollUtils.GetScrollPercentage];
  }
}

// export function useScrollHeight () {
//   const _hasDocument = DocumentUtils.HasDocument();

//   function getScrollHeight() {
//     const top = _hasDocument
//       ? document.body.scrollTop || document.documentElement.scrollTop
//       : 0;

//     const height = _hasDocument
//       ? document.documentElement.scrollHeight -
//         document.documentElement.clientHeight
//       : 0;

//     return {
//       top,
//       height,
//       scrolled: (top && height) ? top / height : 0
//     }
//   }

//   const [scrollHeight, setScrollHeight] = useState(getScrollHeight);
//   return {scrollHeight, setScrollHeight, getScrollHeight};
// }
