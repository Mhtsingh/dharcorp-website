import React from "react";
import './Card.css'
import { FiSettings } from "react-icons/fi";
import { FaHeadphones,FaUserAlt } from "react-icons/fa";

const index = () => {
  return (
    <>
     <div className="container-fluid">
    <div className="row">
        <div className="col-md-4 col-sm-6">
            <div className="cardBox">
                <div className="card-icon">
                   <FiSettings/>
                </div>
                <div className="card-content">
                    <h3>Trusted Services</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            <div className="cardBoxCenter">
                <div className="card-icon">
                    <FaHeadphones />
                </div>
                <div className="card-content">
                    <h3>24/7 Support</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            <div className="cardBox">
                <div className="card-icon">
                    <FaUserAlt/>
                </div>
                <div className="card-content">
                    <h3>Expert & Professional</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus massa, laoreet convallis interdum at, molestie.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default index;
