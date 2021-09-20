import React from "react";
import { connect } from "react-redux";
import Home from "../components/Home";

const HomePage = ({ heroes }) => {
  return (
    <>
      <div className="container">
        <p>My team</p>
        <Home />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  heroes: state.heroes,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
