import React from 'react';

import styled from 'styled-components';

// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';

import { Route, Link } from 'react-router-dom';
// import { WithSubStore, useObservableStore } from './shared/observable-store-provider';
import { Page1 } from './components/page1';
import { Page2 } from './components/page2';
import { WithSubStore, useObservableStore } from './shared/observable-store-provider';
import { UserContext } from './shared/user.context';


const StyledApp = styled.div`
  /*
 * Remove template code below
 */
  font-family: sans-serif;
  

`;

export const App = () => {
  const store = useObservableStore();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.styled-components file.
   */
  return (
    <StyledApp>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <UserContext.Provider value="hellow">
        <Route
          path="/"
          exact
          component={Page1}
        />
        <Route
          path="/page-2"
          exact
          component={Page2}
        />
      </UserContext.Provider>
      
    </StyledApp>
  );
};

export default WithSubStore(App);
