import "./Team.css";
import team from "../../../Images/team.jpg";

const Team = () => {
  return (
    <>
      <div className="team">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5>|| Meet Our Team</h5>
              <h6>Few words from our Best & Happy Clients !</h6>
              {/* <p>USER FRIENDLY</p> */}
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
