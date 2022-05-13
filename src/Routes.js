import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Particles from "./pages/Particles";
import Resume from "./pages/Resume";

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/about" element={<About />} />
      <Route path="/particles" element={<Particles />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/" element={<Home />} />
    </ReactRoutes>
  );
}

export default Routes;
