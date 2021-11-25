import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "../globalStyles";
import { productItem } from "../components/Products/data"
import { Fragment } from "react/cjs/react.production.min";

function App() {
  return (
    <Fragment>

      <GlobalStyle />
      
      <Hero />

      <Products products={productItem}/>
      
    </Fragment>
  );
}

export default App;
