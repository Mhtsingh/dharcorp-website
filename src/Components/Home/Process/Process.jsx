import React,  { useEffect }  from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { FaGlobeAsia,FaLaptopCode } from "react-icons/fa";
import { BiPen } from "react-icons/bi";
import { FaRocket } from "react-icons/fa";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Process.css";

const Process = () => {
    useEffect(() =>{
        Aos.init({duration: 2000});
      },[])
  return (
    <>
    <div className="container-fluid container-wrap">
    <div className="Process_wrap">
          <h3>|| OUR <span>PROCESS</span></h3>
          <h2>Our Working <span>Process</span></h2>
          <div className="proline1"/>
        </div>
        <div className="row">
        <div className="col-md-12">
            <div className="main-timeline">
                <div data-aos="zoom-in" className="timeline">
                    <a href="#" className="timeline-content">
                        <div className="timeline-icon"><FaGlobeAsia/></div>
                        <h3 className="title">Discover And Define</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div data-aos="zoom-in" className="timeline">
                    <a href="#" className="timeline-content">
                        <div className="timeline-icon"><BiPen/></div>
                        <h3 className="title">Interface And Interaction</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div data-aos="zoom-in" className="timeline">
                    <a href="#" className="timeline-content">
                        <div className="timeline-icon"><FaLaptopCode/></div>
                        <h3 className="title">Code And Implementation</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div data-aos="zoom-in" className="timeline">
                    <a href="#" className="timeline-content">
                        <div className="timeline-icon"><FaRocket/></div>
                        <h3 className="title">Deploy And Use</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    {/* <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">Step1</div>
                        <div class="timeline-icon"><FaGlobeAsia/></div>
                        <h3 class="title">Discover And Define</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">Step2</div>
                        <div class="timeline-icon"><BiPen/></div>
                        <h3 class="title">Interface And Interaction</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">Step3</div>
                        <div class="timeline-icon"><GrCode/></div>
                        <h3 class="title">Code And Implementation</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">Step4</div>
                        <div class="timeline-icon"><FaRocket/></div>
                        <h3 class="title">Deploy And Use</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div> */}
</div>
    </>
  );
};

export default Process;
