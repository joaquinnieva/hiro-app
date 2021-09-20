import { useEffect } from "react";
import { connect } from "react-redux";
import getApi from "../services/getApi";

const Card = ({ addState, heroes, addToTeam }) => {
  useEffect(() => {
    getApi("all.json").then((data) => {
      addState(data);
    });
  }, [addState]);

  return (
    <>
      {/* {heroes.map((hero) => (
        <div key={hero.id} className="col-lg-3 col-md-6 col-sm-12 mb-2">
          <div className="card">
            <img
              src={hero.images.lg}
              alt={hero.images.sm}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{hero.name}</h5>
              <p className="card-text ">
                Intelligence:
                <span className="badge bg-secondary">
                  {hero.powerstats.intelligence}
                </span>
                <br></br>
                Strength:
                <span className="badge bg-secondary">
                  {hero.powerstats.strength}
                </span>
                <br></br>
                Speed:
                <span className="badge bg-secondary">
                  {hero.powerstats.speed}
                </span>
                <br></br>
                Durability:
                <span className="badge bg-secondary">
                  {hero.powerstats.durability}
                </span>
                <br></br>
                Power:
                <span className="badge bg-secondary">
                  {hero.powerstats.power}
                </span>
                <br></br>
                Combat:
                <span className="badge bg-secondary">
                  {hero.powerstats.combat}
                </span>
              </p>
              <p className="text-center mb-0">
                <button
                  onClick={() => addToTeam(hero)}
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
                  &nbsp;Add hero
                </button>
              </p>
            </div>
          </div>
        </div>
      ))} */}
    </>
  );
};

const mapStateToProps = (state) => ({
  heroes: state.heroes,
});

const mapDispatchToProps = (dispatch) => ({
  addState(data) {
    dispatch({
      type: "STATE",
      data,
    });
  },
  addToTeam(hero) {
    dispatch({
      type: "TEAM",
      hero,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
