import { useEffect, useState } from "react";
import { connect } from "react-redux";
import getApi from "../services/getApi";
import { Link } from "react-router-dom";

const Search = ({ addToTeam }) => {
  // api state
  const [result, setResult] = useState([]);
  // search states
  const [error, setError] = useState("Please enter a text");
  const [search, setSearch] = useState("iron");
  const [input, setInput] = useState("");
  // event handling
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);

    if (!e.target.value) {
      setError("This is a invalid text");
    }
  };
  // api - renderer
  useEffect(() => {
    getApi(`search/${search}`).then((data) => {
      setResult(data.results);
    });
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="col-lg-6  col-sm-12 m-auto">
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
          {/* conditional error   */}
          {result ? "" : <div className="text-muted mb-4">{error}</div>}
        </div>
        <p className="display-6 border-bottom">Results</p>
        <div className="row">
          {/* conditional render  */}
          {result
            ? result.map((hero) => (
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
                        onClick={() => addToTeam(hero)}
                        className="btn btn-secondary"
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
                      </button>
                      <Link to={hero.id} className="btn btn-primary">
                        <i class="bi bi-info-circle"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToTeam(hero) {
    dispatch({
      type: "TEAM",
      hero,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
