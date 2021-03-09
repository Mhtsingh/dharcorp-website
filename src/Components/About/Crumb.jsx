import React from "react";
import "../Breadcrum/Breadcrum.css";

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
                <a href="#">About</a>
              </li>
            </ol>
          </nav>
          <h1>About</h1>
        </div>
      </div>
    </>
  );
};

export default index;
