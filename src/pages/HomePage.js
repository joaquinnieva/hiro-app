import React from "react";
import { connect } from "react-redux";
import HeroHome from "../components/HeroHome";

const HomePage = ({ heroes }) => {
  return (
    <>
      <HeroHome />
    </>
  );
};

const mapStateToProps = (state) => ({
  heroes: state.heroes,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
