import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import logo from "../../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid text-center footer_wrap">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <footer className="page-footer font-small pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">DharCorp</h5>
              <p>We believce in excellency</p>
              <p>support@dharcopr.com</p>
              <p>+91-6280882955</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Serivce</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Conatct Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/">Privacy Policies</NavLink>
                </li>
                <li>
                  <NavLink to="/">Terms & condition</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright py-3">
          <div className="social_icon">
          Copyright ©2019 DharCorp, LLC. All rights reserved. | 
               <NavLink to="/"> Privacy Policy</NavLink>
               <NavLink to=""> <FaFacebookSquare/></NavLink>
               <NavLink to=""> <FaTwitterSquare/></NavLink>
              <NavLink to=""> <FaInstagramSquare/></NavLink>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
