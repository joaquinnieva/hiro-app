import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Error from "../components/Error";
import Images from "../assets/Images";
import getApi from "../functions/getApi";
import getInfoHero from "../functions/getInfoHero";
import filterAlignment from "../functions/filterAlignment";
import filterDuplicate from "../functions/filterDuplicate";
import getMessage from "../functions/getMessage";

const InfoPage = ({ addToTeam, team }) => {
  // alert state
  const [alert, setAlert] = useState(null);
  const [added, setAdded] = useState(null);
  // error
  const msg = "I can't find this hero 🤔";
  // api state
  const [hero, setHero] = useState([]);
  // to use param of url
  const { id } = useParams();
  // hero filter
  const info = getInfoHero(hero);

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

    if (filtered) {
      setAdded("Successfully added!");
    }

    const msg = getMessage(team, h);
    setAlert(msg);

    setTimeout(() => {
      setAlert(null);
      setAdded(null);
    }, 1100);
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

                {info.map((i) => (
                  <div key={i.name} className="row card-text">
                    <p className="col-auto">{i.name}:</p>
                    <p className="col-auto">{i.value}</p>
                  </div>
                ))}
              </div>
              <div className="d-grid g-5 m-1">
                <button onClick={() => addHero(hero)} className="btn btn-primary col-12">
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
      {/* conditional alerts   */}
      {added ? (
        <div className="fixed-bottom my-1 ">
          <div className="text-center text-black bg-success bg-opacity-100 py-1" role="alert">
            {added}
          </div>
        </div>
      ) : (
        ""
      )}
      {alert ? (
        <div className="fixed-bottom my-1 ">
          <div className="text-center bg-warning bg-opacity-100 py-1" role="alert">
            {alert}
          </div>
        </div>
      ) : (
        ""
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
