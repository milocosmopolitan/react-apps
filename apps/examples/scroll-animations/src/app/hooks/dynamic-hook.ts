// import {EffectCallback, useEffect, useState, DependencyList} from 'react';

// // https://developer.mozilla.org/en-US/docs/Web/API/Window
// class WindowUtils {
//   static IsClient = () => typeof window !== 'undefined';
// }

// class DocumentUtils {
//   static HasDocument = () => typeof document !== 'undefined';
// }

// abstract class DynamicHook {
//   constructor(private _options?: {dependencies?: DependencyList}) {
//     this._init();
//   }

//   abstract connect(): void;
//   abstract disconnect(): void;

//   private _init() {
//     useEffect(
//       () => {
//         this.connect();
//         return this.disconnect();
//       },
//       // Dependency list
//       // Empty array ensures that effect is only run on mount and unmount
//       (this._options && this._options.dependencies) || []
//     );
//   }
// }

// // function dynamicHook<State>(
// //   initialState: State,
// //   effectCallback: EffectCallback //()=> void
// // ) {
// //   const [get, set] = React.useState(initialState);

// //   // set()
// //   handler()
// // }


// // example

// // dynamicHook({}, (getter, setter) => {
// //   const isClient = typeof window === 'object';
// //   if (!isClient) {
// //     return;
// //   }
// //   const handleScroll = () => setScrollHeight(getScrollHeight());

// //   window.addEventListener('scroll', handleScroll);
// //   return () => window.removeEventListener('scroll', handleScroll);
// // })

// export class ScrollHeightReducer {
//   static GetValue = () => {
//     const hasDocument = DocumentUtils.HasDocument();
//     const top = hasDocument
//       ? document.body.scrollTop || document.documentElement.scrollTop
//       : 0;

//     const height = hasDocument
//       ? document.documentElement.scrollHeight -
//         document.documentElement.clientHeight
//       : 0;

//     return {
//       top, height, scrolled: (top && height) ? top / height : 0
//     }
//   }

//   public initialState = ScrollHeightReducer.GetValue();

//   public [height, setHeight] = useState(this.initialState);
// }



// export class ScrollEventHook extends DynamicHook {
//   private _isClient = WindowUtils.IsClient();
//   private _hasDocument = DocumentUtils.HasDocument();

//   public [height, setHeight] = useState(this._getCurrentHeight);

  

//   eventHandlers = [
//     (e?: any) => {
//       console.log('EventHandler 1: ', e)
//     }
//   ]

//   eventListener = (e?: any) => {
//     var i;
//     for (i = 0; i < this.eventHandlers.length; i++) {
//       if (typeof this.eventHandlers[i] === "function") {
//         this.eventHandlers[i](e);
//       }
//     }
//   }
//   private _getCurrentHeight = () => {
//     const top = this._hasDocument
//       ? document.body.scrollTop || document.documentElement.scrollTop
//       : 0;

//     const height = this._hasDocument
//       ? document.documentElement.scrollHeight -
//         document.documentElement.clientHeight
//       : 0;

//     // return (winScroll && height) ? winScroll / height : 0;

//     return {
//       top,
//       height,
//       scrolled: (top && height) ? top / height : 0
//       // speed:   
//     }
//   }

//   constructor() {
//     super({dependencies: []});
//     this.connect = this.connect.bind(this);
//     this.disconnect = this.disconnect.bind(this);
//   }

//   connect() {
//     if (!this._isClient || !this._hasDocument) {
//       return;
//     }
//     // const handleScroll = () => setScrollHeight(getScrollHeight());

//     window.addEventListener('scroll', this.eventListener);
//   }

//   disconnect() {
//     window.removeEventListener('scroll', this.eventListener);
//   }

//   // eventHandler() {}
// }



// // const useScrollEventHook = () => {
// //   const isClient = typeof window === 'object';
// //   const hasDocument = typeof document !== 'undefined';

// //   function getScrollHeight() {
// //     const top = hasDocument
// //       ? document.body.scrollTop || document.documentElement.scrollTop
// //       : 0;

// //     const height = hasDocument
// //       ? document.documentElement.scrollHeight -
// //         document.documentElement.clientHeight
// //       : 0;

// //     // return (winScroll && height) ? winScroll / height : 0;

// //     return {
// //       top,
// //       height,
// //       scrolled: (top && height) ? top / height : 0
// //       // speed:   
// //     }
// //   }

// //   const [state, setScrollHeight] = React.useState(getScrollHeight);

// //   React.useEffect(() => {
// //     if (!isClient || !hasDocument) {
// //       return;
// //     }

// //     const handleScroll = () => setScrollHeight(getScrollHeight());

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []); // Empty array ensures that effect is only run on mount and unmount

// //   return state;
// // }
