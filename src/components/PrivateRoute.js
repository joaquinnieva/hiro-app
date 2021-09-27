import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...others }) => {
  const login = localStorage.getItem("sesion");
  return (
    <Route {...others}>
      {login ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
