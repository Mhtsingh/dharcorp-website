import React from "react";
import {useHistory}  from 'react-router-dom';
import "./Hero.css";
import icon1 from '../../../Images/it.png'
import icon2 from '../../../Images/shield.png'
import icon3 from '../../../Images/business.png'
import icon4 from '../../../Images/team.png'

import man from "../../../Images/man2.png"

const Index = () => {
  const history = useHistory();
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
              <button type="button" onClick={()=>history.push('/about')} className="button_str">
                ABOUT US
              </button>
              <button type="button" onClick={()=>history.push('/contact')} className="button_lgt">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="col-lg-6 hero_img">
            <img src={man} alt="man" />
          </div>
        </div>
      </div>
      <section className="section home-feature">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src={icon1} alt=""/></i>
                                </div>
                                <h5 className="features-title">Provide All Kind of IT SERVICES</h5>
                            </div>
                        </div>
                       
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src={icon2} alt=""/></i>
                                </div>
                                <h5 className="features-title">Solutions For All IT SECURITY</h5>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src={icon3} alt=""/></i>
                                </div>
                                <h5 className="features-title">Solutions For YOUR BUSINESS</h5>
                            </div>
                        </div>
                  
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div className="features-small-item">
                                <div className="icon">
                                    <i><img src={icon4} alt=""/></i>
                                </div>
                                <h5 className="features-title">Best Experience ENGINEERS</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Index;
