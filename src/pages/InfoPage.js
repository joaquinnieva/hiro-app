import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Error from "../components/Error";
import Images from "../assets/Images";
import filterAlignment from "../functions/filterAlignment";
import filterDuplicate from "../functions/filterDuplicate";
import getApi from "../functions/getApi";

const InfoPage = ({ addToTeam, team }) => {
  // error
  const msg = "I can't find this hero 🤔";
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
  // hero filter
  const addHero = (h) => {
    const isDuplicate = filterDuplicate(team, h);
    const filtered = filterAlignment(team, isDuplicate.hero);
    addToTeam(filtered);
  };

  return (
    <div className="container">
      {/* conditional hero renderer by api response   */}
      {hero.response === "success" ? (
        <div className="card">
          <div className="row">
            <div className="col-md-4 col-sm-12 my-auto">
              <div className="d-flex justify-content-center">
                <img
                  src={hero.image?.url}
                  alt="superhero"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title border-bottom"> {hero.name}</h5>
                <div className="row card-text">
                  <p className="col-auto">Alias:</p>
                  <p className="col-auto">{hero.biography?.aliases[0]}</p>
                </div>
                <div className="row card-text">
                  <p className="col-auto">Speed:</p>
                  <p className="col-auto">{hero.powerstats?.speed}</p>
                </div>
                <div className="row card-text">
                  <p className="col-auto">Height:</p>
                  <p className="col-auto">{hero.appearance?.height[1]}</p>
                </div>
                <div className="row card-text">
                  <p className="col-auto">Weight:</p>
                  <p className="col-auto">{hero.appearance?.weight[1]}</p>
                </div>
                <div className="row card-text">
                  <p className="col-auto">Eye color:</p>
                  <p className="col-auto">{hero.appearance?.["eye-color"]}</p>
                </div>
                <div className="row card-text">
                  <p className="col-auto">Hair color:</p>
                  <p className="col-auto">{hero.appearance?.["hair-color"]}</p>
                </div>
                <div className="row card-text">
                  <p className="col-auto">Work:</p>
                  <p className="col-auto">{hero.work?.occupation}</p>
                </div>
                <div className="row card-text">
                  <p className="col-auto">Alignment:</p>
                  <p className="col-auto">{hero.biography?.alignment}</p>
                </div>
              </div>
              <div className="d-grid g-5 m-1">
                <button
                  onClick={() => addHero(hero)}
                  className="btn btn-primary col-12"
                >
                  <img src={Images.add} alt="add" />
                  &nbsp;Add to team
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error msg={msg} />
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
