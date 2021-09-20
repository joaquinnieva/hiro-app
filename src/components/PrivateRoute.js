import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const login = "on";

const PrivateRoute = ({ component: Component, ...others }) => {
  return (
    <Route {...others}>
      {login ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
