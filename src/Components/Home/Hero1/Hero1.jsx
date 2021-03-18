import React from "react";
import banner from "../../../Images/Banner_img.png";
import "./Hero1.css";
import { NavLink } from "react-router-dom";

const Hero1 = () => {
  return (
    <>
      <div className="page-hero-section bg-image hero-home-1">
        <div className="hero-caption">
          <div className="container-fluid h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 col-md-6 col-12 ">
                <div className="badge mb-2"></div>
                <h1 className="mb-4 mt-5">
                  WELCOME TO <span>DHARCORP</span>
                </h1>
                <h2 className="mb-4">Best Platform to Grow </h2>
                <p className="hero_head">YOUR BUSINESS</p>
                <p className="mb-4 hero_para">
                  DharCorp’s management team is comprised of professionals with
                  decades of experience representing clients of virtually all
                  sizes and across many industries.
                </p>
                <NavLink to="/contact" className="rounded-btn mb-2 ">
                  CONTACT US
                </NavLink>
                <NavLink to="/about" className="rounded-btn2 mb-2">
                  ABOUT US
                </NavLink>
              </div>
              <div className="col-lg-6 col-md-6 d-none d-lg-block wow zoomIn">
                <div className="banner-mage">
                  <img src={banner} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
