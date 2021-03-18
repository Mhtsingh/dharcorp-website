import React from "react";
import "./ToolTab.css";
import img1 from "../../../Images/development.jpg";

const ToolTab = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="tool-card">
                <img src={img1} alt="" />
                <h3>some heading</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever. Lorem ipsum dolor sit amet conse
                  ctetur adipisicing elit.
                 
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="tool-card">
                <img src={img1} alt="" />
                <h3>some heading</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever. Lorem ipsum dolor sit amet conse
                  ctetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="tool-card">
                <img src={img1} alt="" />
                <h3>some heading</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever. Lorem ipsum dolor sit amet conse
                  ctetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolTab;
