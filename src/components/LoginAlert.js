import React from "react";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const LoginAlert = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="container">
      <div className="row">
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginAlert;

// Funcion que se fije si esta autorizado y renderice al mismo tiempo
