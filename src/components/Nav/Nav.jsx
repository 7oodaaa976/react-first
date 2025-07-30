import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isScrolled, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg px-4 fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <NavLink className="navbar-brand fw-bold text-uppercase fs-2 text-white" to="/">
            startframework
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
             
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
