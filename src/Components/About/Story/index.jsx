import React from "react";
import "./Story.css";
import about1 from "../../../Images/about1.jpg";
import about2 from "../../../Images/about2.jpg";
import about3 from "../../../Images/about3.jpg";

const index = () => {
  return (
    <>
      <div className="container-fluid story_wrap ">
        <div className="row">
          <div className="col-lg-7 col-12 left_col">
            <h5>
              || OUR <span>STORY</span>
            </h5>
            <h3>
              DHARCORP is best for<span> Technology Provide Solutions</span>
            </h3>
            <hr className="line" />
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
              <a type="button" href="/contact" className="button_str_blu">
                STAY IN TOUCH
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-12 div_wrap">
            <div className="row">
              <div className="col-12 top_div">
                <img className="img_contain" src={about1} alt="about image" />
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-md-6 col-12 bottom_div_left">
                    <img
                      className="img_contain1"
                      src={about2}
                      alt="about image"
                    />
                  </div>
                  <div className="col-md-6 col-12 bottom_div_right">
                    <img
                      className="img_contain1"
                      src={about3}
                      alt="about image"
                    />
                  </div>
                </div>
              </div>
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
