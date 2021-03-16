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
                <p>
                  <FaHeadphonesAlt /> 24X7 Support
                </p>
                <h2>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
                <p>
                  <FaRegSun /> Trusted Services
                </p>
                <h2>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
                <p>
                  <FaUserFriends /> Expert & Professional
                </p>
                <h2>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
                <p>
                  <FaHeadphonesAlt /> 24X7 Support
                </p>
                <h2>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
                <p>
                  <FaRegSun /> Trusted Services
                </p>
                <h2>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="Whycard">
                <p>
                  <FaUserFriends /> Expert & Professional
                </p>
                <h2>
                  Lorem ipsum dolor sit amet, consecte tur adipisicing elit.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whyus;
