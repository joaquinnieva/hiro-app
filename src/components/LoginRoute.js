import React from "react";
import { Redirect, Route } from "react-router";

const LoginRoute = ({ component: Component, ...others }) => {
  const login = localStorage.getItem("sesion");
  return (
    <Route {...others}>{login ? <Redirect to="/" /> : <Component />}</Route>
  );
};

export default LoginRoute;
