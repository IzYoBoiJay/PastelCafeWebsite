import React from "react";
import Hero from "../components/Hero";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "../globalStyles";
import { Fragment } from "react/cjs/react.production.min";

function App() {
  return (
    <Fragment>

      <GlobalStyle />
      
      <Hero />
      
    </Fragment>
  );
}

export default App;
