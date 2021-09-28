import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import Images from "../assets/Images";

function Navbar() {
  let isLogged = localStorage.getItem("sesion");
  return (
    <nav className="navbar navbar-dark bg-secondary fixed-top navbar-expand-md">
      <div className="container-fluid">
        <h3 className="navbar-brand m-0">
          <img src={Images.logo} alt="Hiro App" />
          HIRO&nbsp;&nbsp;&nbsp;
        </h3>

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
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/search" className="nav-link" activeClassName="active">
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">{isLogged ? <LogoutButton /> : ""}</div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
