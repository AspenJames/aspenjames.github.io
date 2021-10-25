import React from "react";

import { Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Particles from "./pages/Particles";

function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/particles">
        <Particles />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
