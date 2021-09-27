import { connect } from "react-redux";
import Images from "../assets/Images";
import getStats from "../functions/getStats";
import CardHero from "../components/CardHero";
import Stats from "../components/Stats";

const HomePage = ({ team, deleteToTeam }) => {
  const stats = getStats(team);

  return (
    <>
      <div className="container">
        <p className="display-6 border-bottom">My team</p>
        <div className="row row-cols-sm-12 row-cols-md-12 row-cols-lg-6 row-cols-xxl-6">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
            <div className="border-start border-5 border-info rounded bg-white">
              <div className="card-body">
                <h5 className="card-title">Statistics</h5>
                {/* rendering stats  */}
                {stats.map((stat) => (
                  <Stats key={stat.name} info={stat} />
                ))}
              </div>
            </div>
          </div>
          {/* conditional team renderer  */}
          {team.length !== 0 ? (
            team.map((hero) => (
              <CardHero
                key={hero.id}
                info={hero}
                action={deleteToTeam}
                icon={Images.x}
              />
            ))
          ) : (
            <p className="col-lg-12 mb-2">
              You need heroes for your team! 🐱‍🏍
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
