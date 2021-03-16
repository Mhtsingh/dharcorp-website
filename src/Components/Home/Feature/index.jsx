import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Feature.css";
import {
  FaGlobeAfrica,
  FaDev,
  FaMobileAlt,
  FaBullhorn,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Feature = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container cont-wrapper">
        <div className="feature_wrap">
          <h3>
            || OUR <span>FEATURES</span>
          </h3>
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
          <div data-aos="fade-up" className="col-lg-4 col-12 column-box">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <FaGlobeAfrica />
                  </div>
                  <h2>WEB DESIGN</h2>
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
          <div data-aos="fade-up" className="col-lg-4 col-12 column-box">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <FaDev />
                  </div>
                  <h2>WEB DEVELOPMENT</h2>
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
          <div data-aos="fade-up" className="col-lg-4 col-12 column-box">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <FaMobileAlt />
                  </div>
                  <h2>MOB APP DESIGN</h2>
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
          <div data-aos="fade-up" className="col-lg-4 col-12 column-box">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <FaBullhorn />
                  </div>
                  <h2>DIGITAL MARKETING</h2>
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
          <div data-aos="fade-up" className="col-lg-4 col-12 column-box">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <FaTelegram />
                  </div>
                  <h2>SEO</h2>
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
          <div data-aos="fade-up" className="col-lg-4 col-12 column-box">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-icon">
                    <FaFacebook />
                  </div>
                  <h2>SOCIAL MEDIA MARKETING</h2>
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
        <div data-aos="fade-up"  className="text-center button">
          <NavLink type="button" to="/service" className="card-btn">
            SEE ALL SERVICES
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Feature;
