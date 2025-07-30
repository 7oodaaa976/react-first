import { useEffect } from "react";
import "./about.css";
const About = () => {
  useEffect(() => {
    document.title = "about";
  }, []);
  return (
    <>
      <div className="about d-flex align-items-center justify-content-center flex-column ">
        <h2 className="fs-1 text-uppercase text-white fw-bold">
          about component
        </h2>
        <div className="lines d-flex justify-content-center align-items-center gap-3">
          <div className="lineOne"></div>
          <div className="star">
            <i className="fas fa-star text-white"></i>
          </div>
          <div className="lineTwo"></div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-6 item">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6 item">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
