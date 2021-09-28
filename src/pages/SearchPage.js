import { useEffect, useState } from "react";
import { connect } from "react-redux";
import getApi from "../functions/getApi";
import filterDuplicate from "../functions/filterDuplicate";
import filterAlignment from "../functions/filterAlignment";
import Error from "../components/Error";
import CardHero from "../components/CardHero";
import Images from "../assets/Images";

const SearchPage = ({ addToTeam, team }) => {
  // api state
  const [result, setResult] = useState([]);
  // search states
  const msg = "This is a invalid text ❗";
  const [search, setSearch] = useState("ro");
  const [input, setInput] = useState("");
  // event handling
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  // hero filter
  const addHero = (h) => {
    const isDuplicate = filterDuplicate(team, h);
    const filtered = filterAlignment(team, isDuplicate.hero);
    addToTeam(filtered);
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
        {alert ? (
          <div className="fixed-bottom my-1 ">
            <div
              className={`text-white text-center bg-${alert.color} bg-opacity-100 py-1`}
              role="alert"
            >
              {alert.message}
            </div>
          </div>
        ) : (
          ""
        )}

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
          {result ? "" : <Error msg={msg} />}
        </div>
        <p className="display-6 border-bottom">Results</p>
        <div className="row">
          {/* conditional hero renderer  */}
          {result
            ? result.map((hero) => (
                <CardHero key={hero.id} info={hero} action={addHero} icon={Images.add} />
              ))
            : ""}
        </div>
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
