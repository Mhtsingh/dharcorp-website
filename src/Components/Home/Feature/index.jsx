import React from "react";
import "./Feature.css";
import { FaGlobeAfrica,FaDev,FaMobile,FaBullhorn,FaTelegram,FaFacebook,FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Feature = () => {
  return (
    <>
      <div className="container">
        <div className="feature_wrap">
          <h3>|| OUR <span>FEATURES</span></h3>
          <h2>We Provide <span>Awesome Services</span></h2>
          <hr className="line1"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            eius molesti ae facere, natus reprehenderit eaque eum, autem ipsam
            are. Magni, error.
          </p>
        </div>
    <div className="row">
    <div className="col-md-4 col-sm-6 column-box">
            <div className="featureBox">
                <div className="feature-icon">
                   <FaGlobeAfrica/>
                </div>
                <div className="feature-content">
                    <h3>Web <span>Design</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 column-box">
            <div className="featureBox">
                <div className="feature-icon">
                   <FaDev/>
                </div>
                <div className="feature-content">
                    <h3>Web <span>Development</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 column-box">
            <div className="featureBox">
                <div className="feature-icon">
                    <FaMobile/>
                </div>
                <div className="feature-content">
                    <h3>Mobile <span>App Design</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 column-box">
            <div className="featureBox">
                <div className="feature-icon">
                    <FaBullhorn/>
                </div>
                <div className="feature-content">
                    <h3>Digital <span>Marketing</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 column-box">
            <div className="featureBox">
                <div className="feature-icon">
                    <FaTelegram/>
                </div>
                <div className="feature-content">
                    <h3>SEO</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 column-box">
            <div className="featureBox">
                <div className="feature-icon">
                    <FaFacebook/>
                </div>
                <div className="feature-content">
                    <h3>Social Media <span>Marketing</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="text-center button">
    <NavLink type="button" to="/service" className="button_str_blu">
     SEE ALL SERVICES
  </NavLink>
  </div>
</div>
    </>
  );
};

export default Feature;
