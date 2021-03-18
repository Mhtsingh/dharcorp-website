import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import "./About.css";
import { useHistory } from "react-router-dom";
import about2 from "../../../Images/about2.jpg";
import about3 from "../../../Images/about3.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  const history = useHistory();
  useEffect(() =>{
    Aos.init({duration: 2000});
  },[])

  return (
    <>
      <div data-aos="fade-up" className="container-fluid about_wrap ">
        <div className="row">
          <div className="col-lg-6 col-12 about_left_col">
            <h5>
              || ABOUT <span> DHARCORP</span>
            </h5>
            <h3>
              DHARCORP is best for
              <span> 
              <br />
                Technology
                Provide Solutions
              </span>
            </h3>
            <div className="aboutline" />
            <p>
              DharCorp is a leading provider of software development
              and business management solutions. DharCorp can develop
              customized development and business solutions
              that meet our client’s highest standards. Whether it is web
              development or mobile application development or both,
              DharCorp is the premier choice for you. We don’t take
              a one size fits all approach when working with our clients.
            </p>
            <div>
              <NavLink
                type="button"
                to="/about"
                className="abt_button_str_blu"
              >
                Read More
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 col-12 about_div_wrap">
            <div className="row">
              <div className="col-12 about_top_div">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div>
              <div className="col-12 nomad">
                <div className="row">
                  <div className="col-md-6 col-12 abtbottom_div">
                    <img className="img_contain" src={about2} alt="about" />
                  </div>
                  <div className="col-md-6 col-12 abtbottom_div">
                    <img className="img_contain" src={about3} alt="about" />
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

export default About;
