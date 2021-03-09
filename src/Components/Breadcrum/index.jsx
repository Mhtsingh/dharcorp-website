import React from "react";
import "./Breadcrum.css";

const index = () => {
  return (
    <>
      <div className="container-fluid wrapper">
        <div className="text-center text">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Contact Us</a>
              </li>
            </ol>
          </nav>
          <h1>Contact Us</h1>
        </div>
      </div>
    </>
  );
};

export default index;
