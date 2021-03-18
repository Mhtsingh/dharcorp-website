import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import logo from "../../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="grid-container">
            <div className="grid-item">
              <img src={logo} className="logo-img" />
            </div>

            <div className="grid-item inner-grid-container">
              <div className="grid-item ">
                <NavLink to="/about">About Us</NavLink>
              </div>
              <div className="grid-item">
                <NavLink to="/service">Services</NavLink>
              </div>
              <div className="grid-item">
                <NavLink to="/contact">Contact us</NavLink>
              </div>
              <div className="grid-item">
                <NavLink to="/">Privacy Policy</NavLink>
              </div>
            </div>

            <div className="grid-item">
              <div className="social-buttons">
                <a href="https://www.instagram.com/dhar_crop/">
                  <i className="circle-icon"><FaInstagram/></i>
                </a>
                <a href="https://www.facebook.com/DharCorp-109339644546492">
                  <i className=" circle-icon"><FaFacebookF/></i>
                </a>
                <a href="https://www.linkedin.com/company/65433157/admin/">
                  <i className=" circle-icon"><FaLinkedinIn/></i>
                </a>
                {/* <a href="">
                  <i className=" circle-icon"><FaTwitter/></i>
                </a> */}
              </div>
            </div>
          </div>       
        </div>
        <div className="lw-footer">
          <p>
            Copyright © 2021 | DharCorp pvt
            ltd All rights reserved
          </p>
          </div>
      </footer>
    </>
  );
};

export default Footer;
