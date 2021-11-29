import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Pages
import MainPage from "./Pages/MainPage";
import PageNotFound from "./Pages/404";

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import Checkout from "./Pages/Checkout/Checkout";

class App extends Component {

  render() {
  return (
    <Router>

      <Switch>

        <Route exact path="/" component={MainPage}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Cart" component={Cart}/>
        <Route exact path="/Menu"component={Products}/>
        <Route exact path="/Checkout"component={Checkout}/>
        <Route exact path="/404" component={PageNotFound}/>
        <Redirect to="/404"/>
 
      </Switch>

    </Router>
  );
  }
}

export default App;
