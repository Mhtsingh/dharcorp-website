import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Feature.css";
import icon1 from "../../../Images/Digital_marketing.png";
import icon2 from "../../../Images/web_development.png";
import icon3 from "../../../Images/Mobile_app.png";
import icon4 from "../../../Images/Business_management.png";
import icon5 from "../../../Images/Business_consulting.png";
import icon6 from "../../../Images/SMM.png";
import icon7 from "../../../Images/Robotic_process.png";
import icon8 from "../../../Images/seo.png";

import { NavLink } from "react-router-dom";

const Feature = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-fluid cont-wrapper">
        <div className="feature_wrap">
          {/* <h3>
            || OUR <span>FEATURES</span>
          </h3> */}
          <h2>
            We Provide <span>Awesome Services</span>
          </h2>
          <div className="line1" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            eius molesti ae facere, natus reprehenderit eaque eum, autem ipsam
            are. Magni, error.
          </p>
        </div>

        <div className="row row_wrapper">
        <div className="col-lg-12 ">
        <div className="row justify-content-center">
          <div
            data-aos="fade-up"
            className="col-lg-3 col-md-6 col-12 column-box">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <img src={icon1} />
                  </div>
                  <h3>
                    WEB
                    <br /> DESIGN
                  </h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <NavLink
                    type="button"
                    to="/service"
                    className="flip-card-btn"
                  >
                    KNOW MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-3 col-md-6 col-12 column-box"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    {/* <FaDev /> */}
                    <img src={icon2} />
                  </div>
                  <h3>
                    WEB <br /> DEVELOPMENT
                  </h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </p>
                  <NavLink
                    type="button"
                    to="/service"
                    className="flip-card-btn"
                  >
                    KNOW MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-3 col-md-6 col-12 column-box"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <img src={icon4} />
                  </div>
                  <h3>
                    BUSINESS <br /> MANAGEMENT
                  </h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </p>
                  <NavLink
                    type="button"
                    to="/service"
                    className="flip-card-btn"
                  >
                    KNOW MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-3 col-md-6 col-12 column-box"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <img src={icon5} />
                  </div>
                  <h3>
                    BUSINESS
                    <br />
                    CONSULTING
                  </h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </p>
                  <NavLink
                    type="button"
                    to="/service"
                    className="flip-card-btn"
                  >
                    KNOW MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-3  col-md-6 col-12 column-box"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <img src={icon3} />
                  </div>
                  <h3>MOBILE APPLICATION DEVELOPMENT</h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </p>
                  <NavLink
                    type="button"
                    to="/service"
                    className="flip-card-btn"
                  >
                    KNOW MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-3  col-md-6 col-12 column-box"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <img src={icon6} />
                  </div>
                  <h3>
                    DIGITAL <br /> MARKETING
                  </h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <NavLink
                    type="button"
                    to="/service"
                    className="flip-card-btn"
                  >
                    KNOW MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-3  col-md-6 col-12 column-box"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <img src={icon7} />
                  </div>
                  <h3>ROBOTIC PROCESS AUTOMATION</h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <NavLink
                    type="button"
                    to="/service"
                    className="flip-card-btn"
                  >
                    KNOW MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-3  col-md-6 col-12 column-box"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <img src={icon8} />
                  </div>
                  <h3>
                    Search Engine <br />
                    Optimization
                  </h3>
                </div>
                <div className="flip-card-back">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <NavLink
                    type="button"
                    to="/service"
                    className="flip-card-btn"
                  >
                    KNOW MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div data-aos="fade-up" className="text-center button">
          <NavLink type="button" to="/service" className="card-btn">
            ALL SERVICES
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Feature;
