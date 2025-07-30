import { useEffect } from "react";
import "./contact.css"

const Contact = () => {
  useEffect(() => {
    document.title = "contact";
  }, []);
  return (
    <div>
      <div className="contact ">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h2>contact section</h2>
          <div className="lineOne"></div>
          <div className="star">
            <i className="fas fa-star text-white"></i>
          </div>
          <div className="lineTwo"></div>
          <div className="form w-75">
            <div class="form-floating mb-3 border border-0 rounded-0">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">userName</label>
            </div>
            <div class="form-floating mb-3 border border-0 rounded-0">
              <input
                type="number"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">userAge</label>
            </div>
            <div class="form-floating mb-3 border border-0 rounded-0">
              <input
                type="email"
                class="form-control"
                id="floatingEmail"
                placeholder="Email"
              />
              <label for="floatingEmail">userEmail</label>
            </div>
            <div class="form-floating mb-3 border border-0 rounded-0">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button className="btn btn-info w-25">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
