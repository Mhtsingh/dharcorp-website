import React from "react";
import { RiEdit2Fill } from "react-icons/ri";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Process.css";

const Process = () => {
  return (
    <>
      <div className="container-fluid container_wrap text-center">
        <h5>|| OUR <span>PROCESS</span></h5>
        <h2>Our Working <span>Process</span></h2>
        {/* <div className="linePro"/> */}
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="serviceBox green">
              <div className="service-icon">
                <span>
                  <RiEdit2Fill />
                </span>
              </div>
              <h3 className="title">Discover And Define</h3>
              <p className="description">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="serviceBox green">
              <div className="service-icon">
                <span>
                  <RiEdit2Fill />
                </span>
              </div>
              <h3 className="title">Interface And Interaction</h3>
              <p className="description">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="serviceBox green">
              <div className="service-icon">
                <span>
                  <RiEdit2Fill />
                </span>
              </div>
              <h3 className="title">Code And Implementation</h3>
              <p className="description">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-3 col-sm-6">
            <div className="serviceBox green">
              <div className="service-icon">
                <span>
                  <RiEdit2Fill />
                </span>
              </div>
              <h3 className="title">Deploy And Use</h3>
              <p className="description">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
