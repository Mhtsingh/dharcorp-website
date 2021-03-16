import "./Team.css";
import team1 from "../../../Images/team-mem1.jpeg";
import team3 from "../../../Images/img-1.jpg";
import ceo from "../../../Images/ceo.jpeg";

const Team = () => {
  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row">
                <div className="col-12 left-text-wrap">
                  <h2>
                    Our Best <span>TEAM</span>
                  </h2>
                  <p>
                    DharCorp is a leading provider of software development and
                    business management solutions. DharCorp can develop
                    customized development and business solutions
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="ceo-img" src={ceo} alt="our ceo" />
                </div>
                <div className="col-8 ceo">
                  <h4>
                    ABOUT <span>CEO</span>
                  </h4>
                  <h3>DHARMINDER SANDHU</h3>
                  <p className="vel-line">
                    DharCorp was founded in 2019 by Dharminder Sandhu
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 left-text-wrap">
                  <p>
                    DharCorp is a leading provider of software development and
                    business management solutions. DharCorp can develop
                    customized development and business solutions{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row">
                <div className="col-6 First-col-wrapper">
                  {/* <h1>rightleft col 1</h1> */}
                  <img className="image-wrapp" src={team1} alt="" />
                {/* <div className="details"><h2>Rahul Dogra <span>UI UX Developer</span></h2></div> */}

                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-12 column-wrapper ">
                      {/* <h1>right row 1</h1> */}
                      <img className="image-wrapp" src={team3} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 column-wrapper">
                      {/* <h1>right row 2</h1> */}
                      <img className="image-wrapp" src={team3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="team">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5>|| Meet Our Team</h5>
              <h6>Few words from our Best & Happy Clients !</h6>
              <hr className="line" />
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
            <div className="col-md-6">
              <img src={team} alt="teamMember" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Team;
