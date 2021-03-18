import React from "react";
import {NavLink} from "react-router-dom";
import "../Breadcrum/Breadcrum.css";

const index = () => {
  return (
    <>
      <div className="container-fluid wrapper">
        <div className="text-center text">
          {/* <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink to="/service">Services</NavLink>
              </li>
            </ol>
          </nav> */}
          <h1>Our Services</h1>
        </div>
      </div>
    </>
  );
};

export default index;
