import { useEffect, useState } from "react";
import { connect } from "react-redux";
import getApi from "../functions/getApi";
import filterDuplicate from "../functions/filterDuplicate";
import filterAlignment from "../functions/filterAlignment";
import Error from "../components/Error";
import CardHero from "../components/CardHero";
import Images from "../assets/Images";
import getMessage from "../functions/getMessage";

const SearchPage = ({ addToTeam, team }) => {
  // alert state
  const [alert, setAlert] = useState(null);
  const [added, setAdded] = useState(null);
  // api state
  const [result, setResult] = useState([]);
  // search states
  const msg = "This is a invalid text ❗";
  const [search, setSearch] = useState("ca");
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
