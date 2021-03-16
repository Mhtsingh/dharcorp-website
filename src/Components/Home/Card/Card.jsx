import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsShieldShaded } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="page-section no-scroll">
        <div className="container-fluid hero-card-wrap">
          <div className="row justify-content-center mt-2">
            <div className="col-lg-12 ">
              <div className="row justify-content-center">
                <div className="col-md-6 col-12 col-lg-3 py-3 wow">
                  <div className="cardHome card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                      <AiFillSetting />
                    </div>
                    <h5>
                      Provide All Kind of <br className="space" /> IT SERVICES
                    </h5>
                  </div>
                </div>
                <div className="col-md-6 col-12 col-lg-3 py-3 wow fadeInLeft">
                  <div className="cardHome card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                      <BsShieldShaded />
                    </div>
                    <h5>
                      Solutions For All
                      <br /> IT SECURITY
                    </h5>
                  </div>
                </div>
                <div className="col-md-6 col-12 col-lg-3 py-3 wow fadeInUp">
                  <div className="cardHome card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                      <FaSuitcase />
                    </div>
                    <h5>
                      Solutions For <br />
                      YOUR BUSINESS
                    </h5>
                  </div>
                </div>
                <div className="col-md-6 col-12 col-lg-3 py-3 wow fadeInRight">
                  <div className="cardHome card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                      <RiTeamFill />
                    </div>
                    <h5>
                      Best Experience
                      <br />
                      ENGINEERS
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
