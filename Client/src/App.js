import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Pages
import MainPage from "./Pages/MainPage";
import PageNotFound from "./Pages/404";

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import Checkout from "./Pages/Checkout/Checkout";
import ConfirmationPage from "./Pages/ConfirmationPage/ConfirmationPage";

import useToken from "./components/App/useToken";



function App() {

  const { token, setToken} = useToken();

  if(!token) {

    return (
      <Router>

          <Switch>

            <Route exact path="/Register" component={Register}/>
            <Route exact path="/Login" render={ () => <Login setToken={setToken} />} />
            <Redirect to="/Login"/>

          </Switch>

      </Router>
    );

  } else if(token) {

  return (
    <Router>

      <Switch>

        <Route exact path="/" component={MainPage}/>
        <Route exact path="/Cart" component={Cart}/>
        <Route exact path="/Menu"component={Products}/>
        <Route exact path="/Checkout"component={Checkout}/>
        <Route exact path="/ConfirmationPage"component={ConfirmationPage}/>
        <Route exact path="/404" component={PageNotFound}/>
        <Redirect to="/"/>
 
      </Switch>

    </Router>
  );

  } else {

    <Router>

    <Switch>

      <Route exact path="/" component={MainPage}/>
      <Route exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>

    </Switch>

  </Router>

  }

}

export default App;
