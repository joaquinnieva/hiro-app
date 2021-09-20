import { connect } from "react-redux";

const Home = ({ team }) => {
  return (
    <>
      <div className="container">
        {team.map((hero) => (
          <div key={hero.id} className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="card">
              <img
                src={hero.images.lg}
                alt={hero.images.sm}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  team: state.team,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
