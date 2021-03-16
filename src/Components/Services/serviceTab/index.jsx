import React, { useEffect }  from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import "./Tabs.css";

const ServiceTab = () => {
  useEffect(() =>{
    Aos.init({duration: 2000});
  },[])
  return (
    <>
      <div data-aos="fade-up" className="container col-lg-12 col-12 text-center  sericeTab-cover">
        <h2>Some Heading Regarding <span>Our Service</span> </h2>
        <div className="bottom-line text-center"></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
          quaerat fugit quas veniam perferendis repudiandae sequi, dolore
          quisquam illum.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever. Lorem ipsum dolor sit amet conse ctetur adipisicing
          elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi,
          dolore quisquam illum.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever. Lorem ipsum dolor sit amet conse ctetur adipisicing
          elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi,
          dolore quisquam illum.
        </p>
      </div>
    </>
  );
};

export default ServiceTab;
