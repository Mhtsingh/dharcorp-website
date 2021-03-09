import React from "react";
import "./Process.css";

const index = () => {
  return (
    <>
      <div className="container wshipping-content-block service-process">
        <div className="top_content">
          <h5>|| OUR PROCESS </h5>
          <p>Our Working Process</p>
          <hr className="line" />
        </div>
        
{/*         
        <div className="process-row">
         <div className="process-step">
            <div className="process-icon">
              <span>1</span>
              <img src="http://web24service.com/demo/w-shipping/assets/images/process-icon1.png" alt=""/>
            </div>
            <p>Select Freight</p>
         </div>
         <div className="process-step">
            <div className="process-icon">
              <span>2</span>
              <img src="http://web24service.com/demo/w-shipping/assets/images/process-icon2.png" alt=""/>
            </div>
            <p>Create Invoice</p>
         </div>
         <div className="process-step">
            <div className="process-icon">
              <span>3</span>
              <img src="http://web24service.com/demo/w-shipping/assets/images/process-icon2.png" alt=""/>
            </div>
            <p>Secure Payment</p>
         </div>
         <div className="process-step">
            <div className="process-icon">
              <span>4</span>
              <img src="http://web24service.com/demo/w-shipping/assets/images/process-icon2.png" alt=""/>
            </div>
            <p>Fast Delivery</p>
         </div>
      </div> */}


        <div className="container row circle_div">
        <div>
          <div className="outerCircle">
            <div className="midCircle">
              <div className="innerCicle">
                <p>01</p>
              </div>
            </div>
          </div>
          <p>Discover and Define</p>
          </div>
          <hr className="dot_line"/>
          <div>
          <div className="outerCircle">
            <div className="midCircle">
              <div className="innerCicle">
                <p>02</p>
              </div>
            </div>
          </div>
          <p>Interface And Interaction</p>
          </div>
          <hr className="dot_line"/>
          <div>
          <div className="outerCircle">
            <div className="midCircle">
              <div className="innerCicle">
                <p>03</p>
              </div>
            </div>
          </div>
          <p>Code And Implementation</p>
          </div>
          <hr className="dot_line"/>
          <div>
          <div className="outerCircle">
            <div className="midCircle">
              <div className="innerCicle">
                <p>04</p>
              </div>
            </div>
          </div>
          <p>Deploy and Use</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
