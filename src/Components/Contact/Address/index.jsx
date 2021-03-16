import React from "react";
import './Address.css'
import icon1 from '../../../Images/mail.png'
import icon2 from '../../../Images/location.png'
import icon3 from '../../../Images/telephone.png'


const index = () => {
  return (
    <>
      <div id="service" className="choose_section">
        <div className="container">
          <div className="col-sm-12">
            <h3 className="choose_text">
            ||  GET IN<span className="color"> TOUCH</span>
            </h3>
            <h1 className="choose_text">Feel Free To <span className="color">Contact Us</span></h1>
            <p className="lorem_text">
              Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad
              teimpor sittem elit inuning ut sed.
            </p>
          </div>
        </div>
      </div>
      <div className="choose_section_bot">
        <div className="container">
          <div className="row pb-5">
            <div className=" col-card-wrap col-sm-4">
              <div className="about_inner">
                <div className="icon">
                  <a>
                    <img src={icon1} alt="globe" />
                  </a>
                </div>
                <h2 className="totaly_text">OFFICIAL EMAIL</h2>
                <p className="making">
                SUPPORT@DHARCORP.COM
                </p>
              </div>
            </div>
            <div className=" col-card-wrap col-sm-4">
              <div className="dedicated">
                <div className="icon">
                  <a>
                    <img src={icon2} alt="web" />
                  </a>
                </div>
                <h2 className="hosting_text">OFFICE ADDRESS</h2>
                <p className="justo_text">
                Mohali, Phase 8B, E-456
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_inner">
                <div className="icon">
                  <a>
                    <img src={icon3} alt="mobile" />
                  </a>
                </div>
                <h2 className="totaly_text">OFFICE MOBILE</h2>
                <p className="making">
                +91  628.088.2955
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
