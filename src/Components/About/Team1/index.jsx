import React from "react";
import "./Team1.css";
import member from "../../../Images/team-mem1.jpeg";

const index = () => {
  return (
    <>
      <div className="team1">
        <div className="container">
          <div className="topText text-center">
            <h2>Our <span>Team Member</span> </h2>
            <p>Meet Our Team</p>
            <div className="team-bottmLine"/>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="team-item">
                <div className="team-img">
                  <img src={member} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Rahul Dogra</h2>
                  <p>UI UX Designer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="team-item">
                <div className="team-img">
                  <img src={member} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Rahul Dogra</h2>
                  <p>UI UX Designer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="team-item">
                <div className="team-img">
                  <img src={member} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Rahul Dogra</h2>
                  <p>UI UX Designer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="team-item">
                <div className="team-img">
                  <img src={member} alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Rahul Dogra</h2>
                  <p>UI UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
