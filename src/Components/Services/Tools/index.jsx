import React from "react";
import "./Tools.css";
import { FaAdobe, FaPhp, FaAndroid, FaReact, FaFigma } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const index = () => {
  return (
    <>
      <div className="contianer text-center">
        <div>
          <h3>Technologies <span> & Tools We Love</span></h3>
          <div className="linetool"></div>
        </div>
        <div className="row section_one">
          <div className="col-sm-3">
          <p><FaAdobe /> <span>Adobe</span></p>
          </div>
          <div className="col-sm-3">
          <p><FaPhp /> <span>php</span></p>
          </div>
          <div className="col-sm-3">
          <p><FaAndroid /> <span> ios/Android</span></p>
          </div> <div className="col-sm-3">
          <p><FaAdobe /> <span>Adobe illustrator</span></p>
          </div>
        </div>

        <div className="row section_one">
          <div className="col-sm-3">
          <p> <FaReact /> <span>React</span></p>
          </div>
          <div className="col-sm-3">
          <p> <FaFigma /> <span>Figma</span></p>
          </div>
          <div className="col-sm-3">
          <p> <SiMysql/> <span>MySql</span></p>
          </div> <div className="col-sm-3">
           <p>
            <FaAdobe /> <span>Adobe illustrator</span>
           </p>
          </div>
        </div>

        <div className="row section_one">
          <div className="col-sm-3">
         <p>
         <FaAdobe /> <span>Adobe XD</span>
         </p>
          </div>
          <div className="col-sm-3">
           <p>
            <FaPhp /> <span>php</span>
           </p>
          </div>
          <div className="col-sm-3">
            <p>
            <FaAndroid /> <span> ios/Android</span>
            </p>
          </div> <div className="col-sm-3">
            <p><FaAdobe /> <span>Adobe illustrator</span></p>
          </div>
        </div>
        <div className="row section_one">
          <div className="col-sm-3">
         <p>
         <FaAdobe /> <span>Adobe XD</span>
         </p>
          </div>
          <div className="col-sm-3">
           <p>
            <FaPhp /> <span>php</span>
           </p>
          </div>
          <div className="col-sm-3">
            <p>
            <FaAndroid /> <span> ios/Android</span>
            </p>
          </div> <div className="col-sm-3">
            <p><FaAdobe /> <span>Adobe illustrator</span></p>
          </div>
        </div>

        <div className="row section_one">
          <div className="col-sm-3">
         <p>
         <FaAdobe /> <span>Adobe XD</span>
         </p>
          </div>
          <div className="col-sm-3">
           <p>
            <FaPhp /> <span>php</span>
           </p>
          </div>
          <div className="col-sm-3">
            <p>
            <FaAndroid /> <span> ios/Android</span>
            </p>
          </div> <div className="col-sm-3">
            <p><FaAdobe /> <span>Adobe illustrator</span></p>
          </div>
        </div>


      </div>
    </>
  );
};

export default index;
