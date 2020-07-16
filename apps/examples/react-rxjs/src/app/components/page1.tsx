import React, { useContext } from 'react';
import { WithSubStore, useObservableStore } from '../shared/observable-store-provider';
import Box from '@material-ui/core/Box';
import { UsingReactStateHook } from './arch-react-hook';
import { UsingReactObservable } from './arch-react-observable';
import { UsingReactMemo } from './arch-react-memo';
import { UserContext } from '../shared/user.context';

interface Test {
  test: string
}

export const Page1 = () => {
  const msg = useContext(UserContext);
  // console.log('Page1')
  // const {state$, setState, getState} = useObservableStore<Test>();
  // setState({test: 'Test'});
  // const state = getState();

  // useEffect(() => {
  //   state$.subsctibe()
  //   return () => {
  //     cleanup
  //   }
  // }, [input])()
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.styled-components file.
   */
  return (
    <Box display="flex">
      {msg}
      <UsingReactStateHook />
      <UsingReactMemo />
      {/* <UsingReactStateHook />
      <UsingReactObservable />
      <UsingReactObservable /> */}
    </Box>
  );
};

export default Page1;
