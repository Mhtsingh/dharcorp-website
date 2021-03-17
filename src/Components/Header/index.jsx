import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  FaBars
} from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo1.png";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";

const header = () => {
  return (
    <>
      <div className="container-fluid"></div>
      <nav className="navbar navbar-expand-lg nav_div ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><FaBars/></span>
          </button>
          <div
            className="collapse navbar-collapse navbar_wrap"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/service"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/contact"
                >
                  Conatct Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default header;
