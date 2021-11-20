import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { productItem } from "./components/Products/data"


function App() {
  return (
    <Router>

      <GlobalStyle />
      
      <Hero />

      <Products products={productItem}/>

    </Router>
  );
}

export default App;
