import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/404";
import Register from "./pages/Register";

class App extends Component {

  render() {
  return (
    <Router>

      <Switch>

        <Route exact path="/" component={MainPage}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/404" component={PageNotFound}/>
        <Redirect to="/404"/>
 
      </Switch>

    </Router>
  );
  }
}

export default App;
