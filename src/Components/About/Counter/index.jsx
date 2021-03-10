import React from 'react'
import './Counter.css'

const index = () => {
    return (
        <>
 <div className="container">
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="counter">
                <div className="counter-content">
                    <div className="counter-icon">
                    <i className="fa fa-globe"></i>
                </div>
                <h3>Web Designing</h3>
                <span className="counter-value">1</span>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="counter purple">
                <div className="counter-content">
                    <div className="counter-icon">
                        <i className="fa fa-rocket"></i>
                    </div>
                    <h3>Web Development</h3>
                    <span className="counter-value">1</span>
                </div>
            </div>
        </div>
      <div className="counter">
                <div className="counter-content">
                    <div className="counter-icon">
                    <i className="fa fa-globe"></i>
                </div>
                <h3>Web Designing</h3>
                <span className="counter-value">1</span>
                </div>
            </div>
     <div className="counter">
                <div className="counter-content">
                    <div className="counter-icon">
                    <i className="fa fa-globe"></i>
                </div>
                <h3>Web Designing</h3>
                <span className="counter-value">1</span>
                </div>
            </div>
    </div>
</div>
        </>
    )
}

export default index
