import React from 'react'
import './Form.css'
import about1 from '../../../Images/about1.jpg'
const index = () => {
    return (
        <>
 <div className="section layout_padding">
           <div className="container-fluid"> 
            <div className="row">
            <div className="col-md-6">
                  <img src={about1} alt="about" />
               </div>
               <div className="col-md-6 blog_wrap">
                  <div className="form from_wrap">
                     <h5>||  WHY CHOOSE US</h5>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" placeholder="User Name"/>
                        </div>
                        <div className="form-group">
                            <label>Email ID</label>
                            <input type="email" className="form-control" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <label>Phone No.</label>
                            <input type="text" className="form-control" placeholder="Phone Number"/>
                        </div>
                        <button  type="submit" className="btn signup">Send Message</button>
                    </form>
                  </div>
               </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default index
