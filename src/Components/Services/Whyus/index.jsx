import "./Whyus.css";
import { FaHeadphonesAlt, FaRegSun, FaUserFriends } from "react-icons/fa";

const Whyus = () => {
  return (
    <>
      <section className="coantiner bg-light pt-5 pb-5">
        <div className="continer text-center content">
          <h5>
            || Why <span>Choose Us</span>
          </h5>
          <div className="whyLine" />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
              <FaHeadphonesAlt/> 
                <h2>
                 24X7 Support
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
              <FaRegSun />
                <h2>
                  Trusted Services
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
              <FaUserFriends />
                <h2>
                  Expert And Professional
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
              <FaHeadphonesAlt /> 
                <h2>
                 24X7 Support
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
              <FaRegSun />
                <h2>
                   Trusted Services
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
              <FaUserFriends />
                <h2>
                   Expert And Professional
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whyus;
