import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-secondary fixed-top navbar-expand-md">
      <div className="container-fluid">
        <h2 className="navbar-brand">HIRO</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/search"
                className="nav-link"
                activeClassName="active"
              >
                Search
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <LogoutButton></LogoutButton>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
