import React from 'react'
import './Reason.css'
import logo from '../../../Images/logo1.png'
import img1 from '../../../Images/ser-1.png'
import img2 from '../../../Images/ser-2.png'
import img3 from '../../../Images/ser-3.png'
import img4 from '../../../Images/ser-4.png'


const Reason = () => {
    return (
        <>
<section id="process" class="process-section">
  <div class="container">
  {/* <img class="l-icon text-center hidden-md hidden-lg" src={img1}/> */}
    {/* <h3 class="hidden-lg hidden-md text-center"> Four great<br/>
      reasons to trust<br/>
      Dharcorp</h3> */}
    <div class="row">
      <div class="col-md-4 text-center left">
        <div class="pro-left animate-box"> <img src={img1} alt="#"/>
          <p>Discover and define</p>
        </div>
        <div class="pro-left animate-box"> <img src={img2} alt="#"/>
          <p>Interface and interaction</p>
        </div>
      </div>
      <div class="col-md-4 text-center process-title hidden-sm hidden-xs animate-box1">
       <img src={logo}/>
        <h3> Four great <br/>
          reasons to trust <br/>
          Dharcorp </h3>
      </div>
      <div class="col-md-4 text-center right">
        <div class="pro-right animate-box"> <img src={img3} alt="#"/>
          <p>Code and implementation</p>
        </div>
        <div class="pro-right animate-box"> <img src={img4} alt="#"/>
          <p>Deploy and use</p>
        </div>
      </div>
    </div>
  </div>
</section>  
        </>
    )
}

export default Reason
