import React, { createContext, useContext, DependencyList, FunctionComponent, ComponentClass } from 'react';
import { Observable, BehaviorSubject, fromEventPattern } from 'rxjs';
import { map } from 'rxjs/operators'


type PathSelector = string | Array<string|number>;

class Selector {
  static RecursiveSelect<State>(state$: Observable<any>, selector: Array<string|number>) {
    const key = selector.pop();
    if (selector.length > 0) {
      return recursiveSelect(state$, selector);
    } else {
      return state$.pipe(map(state => state[key]));
    }
  }

  static SelectFunction(state$: Observable<any>) {
    return (selector: PathSelector) => typeof selector === 'string'
      ? state$.pipe(map(state => state[selector]))
      : recursiveSelect(state$, selector);
  }
}






export interface ObservableStateOption<State> {
  initialState: State;
  deps?: DependencyList;
}

export function useState$<State>(initialState: State): [
    // observable
    Observable<State>,
    // setter
    (state: State) => void,
    // getter
    () => State,
    // selector
    (selector: PathSelector) => any
] {
    const subject = new BehaviorSubject(initialState);
    const obs$ = subject.asObservable();

    const getter = () => subject.value;
    const setter = (state: State) => {
      subject.next(state)
    };
    return [obs$, setter, getter, Selector.SelectFunction(obs$)]
}

interface IObservableStoreContext<S = object> {
  state$: Observable<S>;
  setState: (state: S) => void;
  getState: () => S;
  select: (selector: PathSelector) => Observable<any>
}

export const ObservableStoreContext = createContext<IObservableStoreContext<any>>(null);

export function useObservableStore<S = object>() {
  return useContext<IObservableStoreContext<S>>(ObservableStoreContext);
}

function recursiveSelect<State>(state$: Observable<any>, selector: Array<string|number>) {
  const key = selector.pop();
  if (selector.length > 0) {
    return recursiveSelect(state$, selector);
  } else {
    return state$.pipe(map(state => state[key]));
  }
}


export const SubStoreProvider = (props) => {
  const {initialState} = props;
  const [state$, setState, getState] = useState$(initialState);

  function select(selector: PathSelector) {
    switch (typeof selector) {
      case 'string':
        return state$.pipe(map(state => state[selector]));
      case 'object':
        return recursiveSelect(state$, selector);
      default:
        break;
    }
  }

  console.log('SubStoreProvider');
  return (
    <ObservableStoreContext.Provider value={{
      state$, setState, getState, select
    }}>
      {props.children}
    </ObservableStoreContext.Provider>
  )
}

// WithSubStore HOC
// export const WithSubStore: <P>(Component: FunctionComponent<P> | ComponentClass<P>) => FunctionComponent<P> = 
//   <P>(Component: FunctionComponent<P> | ComponentClass<P>) => (props: P) => {
//     console.log('WithSubStore');
//     return 
//   }

export function WithSubStore<P>(Component: FunctionComponent<P> | ComponentClass<P>): FunctionComponent<P> {
  console.log('WithSubStore.init');
  return (props) => {
    console.log('WithSubStore.render');
    return (
      <SubStoreProvider>
        <Component {...props} />
      </SubStoreProvider>
    )
  }
}
