import React from "react";
import "./Story.css";
import {NavLink} from "react-router-dom"
import about1 from "../../../Images/about1.jpg";


const index = () => {
  return (
    <>
      <div className="container-fluid story_wrap ">
        <div className="row">
          <div className="col-lg-6 col-12 left_col">
            <h5>
              || OUR <span>STORY</span>
            </h5>
            <h3>
              DHARCORP is best for<span> Technology Provide Solutions</span>
            </h3>
            <div className="line" />
            <p>
              DharCorp is a leading provider of software development and
              business management solutions. DharCorp can develop customized
              development and business solutions that meet our client’s highest
              standards. Whether it is web development or mobile application
              development or both, DharCorp is the premier choice for you. We
              don’t take a one size fits all approach when working with our
              clients.
            </p>
            <div>
              <NavLink type="button" to="/contact" className="button_str_blu">
                STAY IN TOUCH
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="box">
             <img src={about1} alt="about"/>
            </div>
          </div>
        </div>
        <div className="story_cont vl">
          <p>
            DharCorp is a leading provider of software development and business
            management solutions. DharCorp can develop customized development
            and business solutions that meet our client’s highest standards.
            Whether it is web development or mobile application development or
            both, DharCorp is the premier choice for you. We don’t take a one
            size fits all approach when working with our clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
