import React from "react";
import "./Team.css";

const index = () => {
  return (
    <>
      <div className="feature_wrap">
        <h3>
          || MEET OUR <span>TEAM</span>
        </h3>
        {/* <h2>
            We Provide <span>Awesome Services</span>
          </h2> */}
        <hr className="line1" />
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 py-4 mt-5 mb-5">
              <div className="text-center">
                <img
                  src="https://i.imgur.com/stD0Q19.jpg"
                  width="100"
                  className="rounded-circle"
                />
                <h3 className="mt-2">Maria Smantha</h3>
                <span className="mt-1 clearfix">Android Developer</span>
                <small className="mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
                <div className="social-buttons mt-5">
                  <button className="neo-button">
                    <i className="fa fa-facebook fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-linkedin fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-google fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-youtube fa-1x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 py-4 mt-5">
              <div className="text-center">
                <img
                  src="https://i.imgur.com/xELPaag.jpg"
                  width="100"
                  className="rounded-circle"
                />
                <h3 className="mt-2">Simona Disa</h3>
                <span className="mt-1 clearfix">Graphics Designer</span>
                <small className="mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
                <div className="social-buttons mt-5">
                  <button className="neo-button">
                    <i className="fa fa-facebook fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-linkedin fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-google fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-youtube fa-1x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 py-4 mt-5">
              <div className="text-center">
                <img
                  src="https://i.imgur.com/nAcoHRf.jpg"
                  width="100"
                  className="rounded-circle"
                />
                <h3 className="mt-2">John Smith</h3>
                <span className="mt-1 clearfix">Java Architect</span>
                <small className="mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </small>
                <div className="social-buttons mt-5">
                  <button className="neo-button">
                    <i className="fa fa-facebook fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-linkedin fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-google fa-1x"></i>
                  </button>
                  <button className="neo-button">
                    <i className="fa fa-youtube fa-1x"></i>
                  </button>
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
