import React from "react";
import user from "../../../Images/user.png";
import "./Team.css";

const index = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="heading-title text-center">
            <h3 className="text-uppercase">|| OUR STORY </h3>
            <p className="p-top-30 half-txt">
              Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.
              Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.{" "}
            </p>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg"
                  alt="team member"
                  className="img-responsive"
                />
              </div>
              {/* <div className="team-hover">
                                    <div className="desk">
                                        <h4>Hi There !</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div> */}
            </div>
            <div className="team-title">
              <h5>Martin Smith</h5>
              <span>founder & ceo</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg"
                  alt="team member"
                  className="img-responsive"
                />
              </div>
              {/* <div className="team-hover">
                                    <div className="desk">
                                        <h4>Hello World</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div> */}
            </div>
            <div className="team-title">
              <h5>Franklin Harbet</h5>
              <span>HR Manager</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg"
                  alt="team member"
                  className="img-responsive"
                />
              </div>
              {/* <div className="team-hover">
                                    <div className="desk">
                                        <h4>I love to design</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div> */}
            </div>
            <div className="team-title">
              <h5>Linda Anderson</h5>
              <span>Marketing Manager</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
    <div className="row">
        <div className="col-lg-3 col-sm-6">
            <div className="our-team">
                <img src={user} alt=""/>
                <div className="team-prof">
                    <h3>Mohit Singh</h3>
                    <h5>Developer</h5>
                </div>
            </div>
        </div>
 <div className="col-lg-3 col-sm-6">
            <div className="our-team">
                <img src={user} alt=""/>
                <div className="team-prof">
                    <h3>Mohit Singh</h3>
                    <h5>Developer</h5>
                </div>
            </div>
        </div>
    <div className="col-lg-3 col-sm-6">
            <div className="our-team">
                <img src={user} alt=""/>
                <div className="team-prof">
                    <h3>Mohit Singh</h3>
                    <h5>Developer</h5>
                </div>
            </div>
        </div>

    </div>
</div>  */}
    </>
  );
};

export default index;
