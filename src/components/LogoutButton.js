import React from "react";
import Images from "../assets/Images";

const LogoutButton = () => {
  const logout = () => {
    localStorage.removeItem("sesion");
    window.location.reload(true);
  };
  return (
    <>
      <button className="btn btn-secondary" onClick={logout}>
        Log Out &nbsp;
        <img src={Images.logout} alt="logout" />
      </button>
    </>
  );
};

export default LogoutButton;
