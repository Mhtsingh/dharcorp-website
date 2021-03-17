import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo1.png";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="container-fluid">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i 
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
