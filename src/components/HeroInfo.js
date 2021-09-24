import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import getApi from "../services/getApi";

const HeroInfo = ({ addToTeam, team }) => {
  // api state
  const [hero, setHero] = useState([]);
  // to use param of url
  const { id } = useParams();
  // api - renderer
  useEffect(() => {
    getApi(`${id}`).then((data) => {
      setHero(data);
    });
  }, [id]);

  return (
    <div className="">
      {/* conditional api response   */}
      {hero.response === "success" ? (
        <div className="card m-auto">
          <div className="row g-0">
            <div className="col-md-4 col-sm-12">
              <div className="d-flex justify-content-center">
                <img
                  src={hero.image?.url}
                  alt="superhero"
                  className="img-fluid rounded-start"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title"> {hero.name}</h5>

                <div className="row">
                  <p className="col-3">alias:</p>
                  <p className="col-auto">{hero.biography?.aliases[0]}</p>
                </div>

                <div className="row">
                  <p className="col-3">speed:</p>
                  <p className="col-auto">{hero.powerstats?.speed}</p>
                </div>
                <div className="row">
                  <p className="col-3">height:</p>
                  <p className="col-auto">{hero.appearance?.height[1]}</p>
                </div>
                <div className="row">
                  <p className="col-3">weight:</p>
                  <p className="col-auto">{hero.appearance?.weight[1]}</p>
                </div>
                <div className="row">
                  <p className="col-3">eye color:</p>
                  <p className="col-auto">{hero.appearance?.["eye-color"]}</p>
                </div>
                <div className="row">
                  <p className="col-3">hair color:</p>
                  <p className="col-auto">{hero.appearance?.["hair-color"]}</p>
                </div>
                <div className="row">
                  <p className="col-3">work:</p>
                  <p className="col-auto">{hero.work?.occupation}</p>
                </div>
              </div>
            </div>
            <div className="d-grid gap-5 m-4">
              <button
                onClick={() => {
                  if (team.length < 2) {
                    addToTeam(hero);
                  } else {
                    console.log("s paso");
                  }
                }}
                className="btn btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 18 16"
                >
                  <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                </svg>
                &nbsp;Add to team
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">I can't find this hero</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  team: state.team,
});

const mapDispatchToProps = (dispatch) => ({
  addToTeam(hero) {
    dispatch({
      type: "TEAM",
      hero,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroInfo);
