import React,  { useEffect }  from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import './Service.css'
import service from "../../../Images/service.jpg";

const Service = () => {
  useEffect(() =>{
    Aos.init({duration: 2000});
  },[])
  return (
    <>
     <div className="service">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <h6>Few words from our Best & Happy Clients !</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever. Lorem ipsum dolor sit amet conse ctetur adipisicing
                elit. Qui quaerat fugit quas veniam perferendis repudiandae
                sequi, dolore quisquam illum.Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever. Lorem ipsum dolor sit amet
                conse ctetur adipisicing elit. Qui quaerat fugit quas veniam
                perferendis repudiandae sequi, dolore quisquam illum.Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever.
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
            <div  className="col-lg-6 col-12">
              <img src={service} alt="teamMember" />
            </div>
          </div>
        </div>
      </div>
      <section className="container-fluid bg-wrapp">
      <div className="service">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div data-aos="fade-right" className="col-lg-6 col-12">
            <img src={service} alt="teamMember" />
             
            </div>
            <div data-aos="fade-left" className="col-lg-6 col-12">
              <h6>Few words from our Best & Happy Clients !</h6>
              {/* <div className="line" /> */}
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever. Lorem ipsum dolor sit amet conse ctetur adipisicing
                elit. Qui quaerat fugit quas veniam perferendis repudiandae
                sequi, dolore quisquam illum.Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever. Lorem ipsum dolor sit amet
                conse ctetur adipisicing elit. Qui quaerat fugit quas veniam
                perferendis repudiandae sequi, dolore quisquam illum.Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever.
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Service;
