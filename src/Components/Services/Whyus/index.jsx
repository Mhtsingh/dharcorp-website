import "./Whyus.css";
import team from "../../../Images/team.jpg";

const Team = () => {
  return (
    <>
      <div className="Servteam">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 team_cont">
              <h5>|| WHY CHOOSE US</h5>
              <h6>We Provide Awesome Service</h6>
              <hr className="line2" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
            </div>
            <div className="col-md-6">
              <img src={team} alt="Image" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid team_wrap row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={team} alt="out team" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
         
        </div>
      </div> */}
    </>
  );
};

export default Team;
