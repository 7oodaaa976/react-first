import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row text-white">
            <div className="col-md-4">
              <div className="location">
                <h3>location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="around">
                <h3>around the web</h3>
                <ul className="icons list-unstyled d-flex gap-3">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                    </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about">
                <h3>about the freelancer</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
