import React from "react";
import "./Team.css";
import img from '../../../Images/img-1.jpg'
import { FaFacebook } from "react-icons/fa";

const index = () => {
  return (
    <>
  <div class="container">
      <div className="feature_wrap">
        <h3>
          || MEET OUR <span>TEAM</span>
        </h3>
        <hr className="line1" />
      </div>
  {/* <div className="container"> */}
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={img}/>
                </div>
                <h3 className="title">Williamson</h3>
                <span className="post">Web Developer</span>
                <ul className="social">
                    <li><a href="#" className="fab fa-facebook"><FaFacebook/></a></li>
                    <li><a href="#" className="fab fa-twitter"><FaFacebook/></a></li>
                    <li><a href="#" className="fab fa-google-plus"><FaFacebook/></a></li>
                    <li><a href="#" className="fab fa-linkedin"><FaFacebook/></a></li>
                </ul>
            </div>
        </div>
 
        <div className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={img}/>
                </div>
                <h3 className="title">Kristiana</h3>
                <span className="post">Web Designer</span>
                <ul className="social">
                    <li><a href="#" className="fab fa-facebook"></a></li>
                    <li><a href="#" className="fab fa-twitter"></a></li>
                    <li><a href="#" className="fab fa-google-plus"></a></li>
                    <li><a href="#" className="fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
   <div className="col-md-3 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={img}/>
                </div>
                <h3 className="title">Kristiana</h3>
                <span className="post">Web Designer</span>
                <ul className="social">
                    <li><a href="#" className="fab fa-facebook"></a></li>
                    <li><a href="#" className="fab fa-twitter"></a></li>
                    <li><a href="#" className="fab fa-google-plus"></a></li>
                    <li><a href="#" className="fab fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
{/*     </div> */}
</div>
</div>
    </>
  );
};

export default index;
