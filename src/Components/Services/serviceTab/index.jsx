import React from "react";
import icon1 from "../../../Images/icon1.png";
import icon2 from "../../../Images/icon2.png";
import icon3 from "../../../Images/icon3.png";
import icon4 from "../../../Images/icon4.png";
import icon5 from "../../../Images/icon5.png";
import icon6 from "../../../Images/icon6.png";
import icon7 from "../../../Images/icon7.png";
import icon8 from "../../../Images/icon8.png";
import icon9 from "../../../Images/icon9.png";

import "./Tabs.css";

const index = () => {
  return (
    <>
      <div id="service" className="choose_section">
        <div className="container">
          <div className="col-sm-12">
            <h2 className="choose_text">
              || OUR <span> SERVICES</span>
            </h2>
            <h1 className="choose_text">
              We Provide<span> Awesome Service</span>
            </h1>
            {/* <div className="lineserv" /> */}
            <p className="lorem_text">
              Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad
              teimpor sittem elit inuning ut sed.
            </p>
          </div>
        </div>
      </div>
      <div className="choose_section_bot">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon1} alt="globe" />
                  </a>
                </div>
                <h2 className="totaly_text">WEB DESIGN</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon2} alt="web" />
                  </a>
                </div>
                <h2 className="totaly_text">WEB DEVELOPMENT</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon3} alt="mobile" />
                  </a>
                </div>
                <h2 className="totaly_text">MOB APP DESIGN</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose_section_bot">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon4} alt="" />
                  </a>
                </div>
                <h2 className="totaly_text">DIGITAL MARKETING</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon5} alt="" />
                  </a>
                </div>
                <h2 className="totaly_text">SEO</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon6} alt="" />
                  </a>
                </div>
                <h2 className="totaly_text">SOCIAL MEDIA MARKETING</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose_section_bot">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon7} alt="" />
                  </a>
                </div>
                <h2 className="totaly_text">Business Management</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon8} alt="" />
                  </a>
                </div>
                <h2 className="totaly_text">Business Consulting</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="iconServ">
                  <a href="#">
                    <img src={icon9} alt="" />
                  </a>
                </div>
                <h2 className="totaly_text">Paid Marketing</h2>
                <p className="making">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
