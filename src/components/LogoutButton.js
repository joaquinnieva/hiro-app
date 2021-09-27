import React from "react";
import Images from "../assets/Images";

const LogoutButton = () => {
  return (
    <>
      <button className="btn btn-secondary">
        Log Out &nbsp;
        <img src={Images.logout} alt="logout" />
      </button>
    </>
  );
};

export default LogoutButton;
