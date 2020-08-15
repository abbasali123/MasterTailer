import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
// import "assets/css/style.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// pages for this product
import ProfilePage from "views/ProfilePage.js";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";

import Landingafffialate from "views/LandingPage/Landingafffialate";

import Landingshopowner from "views/LandingPage/Landingshopowner.js";

import Signup from "views/LoginPage/Signup.js";
import Signin from "views/LoginPage/Signin.js";
import HomePage from "views/HomePage/HomePage.js";

import OrderLandingPage from "views/LandingPage/OrderBooker/OrderLandingPage.js";
import FOrderLandingPage from "views/LandingPage/OrderBooker/FOrderLandingPage.js";
import CustomerPage from "views/CustomerLandingPage/CustomerPage.js";

import AdminPage from "views/AdminLandingPage/AdminPage.js";

import Measurements from "views/MeasurementsPage/Measurements";

import { Person } from "@material-ui/icons";

var hist = createBrowserHistory();
var records = "";
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Admin" component={AdminPage} />
      <Route path="/landing-owner" component={Landingshopowner} />
      <Route path="/affialate" component={Landingafffialate} />
      <Route path="/landing-page" component={LandingPage} />

      <Route path="/orderlanding" component={OrderLandingPage} />
      <Route path="/Forderlanding" component={FOrderLandingPage} />
      <Route path="/customerpage" component={CustomerPage} />
      <Route path="/Measurements" component={Measurements} />
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/Signup" component={Signup} />
      <Route path="/Signin" component={Signin} />
      {/* <Route path="/HomePage" component={HomePage} /> */}
      <Route path="/form" component={Components} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,

  document.getElementById("root")
);
