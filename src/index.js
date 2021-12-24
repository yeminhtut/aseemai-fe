import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import store from "./store";
import Index from "views/Index";
import DeveloperContainer from 'views/container/DeveloperContainer'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={props => <Index {...props} />}
      />
      <Route path="/developers" exact render={props => <DeveloperContainer {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);


