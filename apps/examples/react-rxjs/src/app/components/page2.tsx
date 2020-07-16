import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import { UsingReactStateHook } from './arch-react-hook';
import { UsingReactMemo } from './arch-react-memo';
import { UserContext } from '../shared/user.context';

interface Test {
  test: string
}

export const Page2 = () => {
  const msg = useContext(UserContext);
  return (
    <Box display="flex">
      { msg}

    </Box>
  );
};

export default Page2;
