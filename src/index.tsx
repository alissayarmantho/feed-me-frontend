import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/pages/home/Home";
import Login from "./views/pages/login/Login";
import Result from "./views/pages/result/Result";
import FoodPlaceProfile from "./views/pages/food-place-profile/FoodPlaceProfile";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/food-place-profile" component={FoodPlaceProfile} />
      <Route path="/result" component={Result} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
