import React from 'react';

import {
  Switch,
  Route
} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes;