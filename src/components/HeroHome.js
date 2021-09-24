// import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomeHeroes = ({ team, deleteToTeam }) => {
  const totalCombat = team.reduce(
    (prev, next) => prev + parseInt(next?.powerstats.combat),
    0
  );
  const totalIntelligence = team.reduce(
    (prev, next) => prev + parseInt(next?.powerstats.intelligence),
    0
  );
  const totalStrength = team.reduce(
    (prev, next) => prev + parseInt(next?.powerstats.strength),
    0
  );
  const totalSpeed = team.reduce(
    (prev, next) => prev + parseInt(next?.powerstats.speed),
    0
  );
  const totalDurability = team.reduce(
    (prev, next) => prev + parseInt(next?.powerstats.durability),
    0
  );
  const totalPower = team.reduce(
    (prev, next) => prev + parseInt(next?.powerstats.power),
    0
  );
  const stats = {
    intelligence: totalIntelligence,
    strength: totalStrength,
    speed: totalSpeed,
    durability: totalDurability,
    power: totalPower,
    combat: totalCombat,
  };

  return (
    <>
      <div className="container">
        <p className="display-6 border-bottom">My team</p>
        <div className="row row-cols-sm-12 row-cols-md-12 row-cols-lg-6 row-cols-xxl-6">
          {/* conditional render  */}

          <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">STATS</h5>
                <div>Combat: {stats.combat}</div>
                <div>Speed: {stats.speed}</div>
                <div>Strength: {stats.strength}</div>
                <div>Speed: {stats.speed}</div>
                <div>Power: {stats.power}</div>
                <div>Durability: {stats.durability}</div>
              </div>
            </div>
          </div>

          {team.length !== 0 ? (
            team.map((hero) => (
              <div key={hero.id} className="col-lg-3 col-md-6 col-sm-12 mb-2">
                <div className="card">
                  <img
                    src={hero.image?.url}
                    alt={hero.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{hero.name}</h5>
                  </div>
                  <div className="btn-group " role="group">
                    <button
                      onClick={() => deleteToTeam(hero)}
                      className="btn btn-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                      </svg>
                    </button>
                    <Link to={hero.id} className="btn btn-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-lg-12 col-md-12 col-sm-12 mb-2">
              You need heroes for your team!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  team: state.team,
});

const mapDispatchToProps = (dispatch) => ({
  deleteToTeam(hero) {
    dispatch({
      type: "DELETE",
      hero,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeroes);
