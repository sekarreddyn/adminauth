import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Login from "../../components/Login";
import Dashboard from "../../components/Dashboard";
import Temp from "../../components/Temp";
import Organization from "../../components/Organization";
import { history } from "../../helpers/history";
// import PrivateRoute from "../../helpers/privateRoute";
import ErrorBoundary from "../Utilities/ErrorBoundary";

class RouterApp extends Component {
  render() {
    return (
      <Router history={history}>
        <ErrorBoundary>
          <Route exact path="/organizations" component={Organization} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/temp" component={Temp} />
          <Route exact path="/login" component={Login} />
        </ErrorBoundary>
      </Router>
    );
  }
}

export default RouterApp;
