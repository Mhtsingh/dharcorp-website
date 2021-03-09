import React from "react";
import { FaTools, FaShieldAlt, FaLaptop, FaUserFriends } from "react-icons/fa";
import "./Hero.css";
import icon1 from '../../../Images/it.png'
import icon2 from '../../../Images/shield.png'
import icon3 from '../../../Images/business.png'
import icon4 from '../../../Images/team.png'

import man from "../../../Images/man2.png"

const index = () => {
  return (
    <>
      <div className="container-fluid hero_wrap">
        <div className="row ">
          <div className="col-lg-6 ">
            <p className="heading_top">WELCOME TO DHARCORP</p>
            <p className="heading_med">Best Platform to Grow Your Business</p>
            <p className="heading_btm">
              DharCorp’s management team is comprised of professionals with
              decades of experience representing clients of virtually all sizes
              and across many industries.
            </p>
            <div className="button_wrp">
              <button type="button" className="button_str">
                ABOUT US
              </button>
              <button type="button" className="button_lgt">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="col-lg-6 hero_img">
            <img src={man} alt="man" />
          </div>
        </div>
      </div>
      <section class="section home-feature">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src={icon1} alt=""/></i>
                                </div>
                                <h5 class="features-title">Provide All Kind of IT SERVICES</h5>
                            </div>
                        </div>
                       
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src={icon2} alt=""/></i>
                                </div>
                                <h5 class="features-title">Solutions For All IT SECURITY</h5>
                            </div>
                        </div>
                        
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src={icon3} alt=""/></i>
                                </div>
                                <h5 class="features-title">Solutions For YOUR BUSINESS</h5>
                            </div>
                        </div>
                  
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src={icon4} alt=""/></i>
                                </div>
                                <h5 class="features-title">Best Experience ENGINEERS</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
      {/* <div className="container-fluid card_wrap">
        <div className="card_one col-md-3 ">
          <FaTools className="card_one_icon" />
          <p>Provide All Kind of IT SERVICES</p>
        </div>
        <div className="card_one col-md-3 ">
          <FaShieldAlt className="card_one_icon" />
          <p>Solutions For All IT SECURITY</p>
        </div>
        <div className="card_one col-md-3 ">
          <FaLaptop className="card_one_icon" />
          <p>Solutions For YOUR BUSINESS</p>
        </div>
        <div className="card_one col-md-3 ">
          <FaUserFriends className="card_one_icon" />
          <p>Best Experience ENGINEERS</p>
        </div>
      </div> */}
     
    </>
  );
};

export default index;
