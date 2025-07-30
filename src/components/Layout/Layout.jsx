import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./layout.css"
import { useEffect } from "react";

const Layout = () => {
 
  return (
    <div>
      <Nav />
      <div className="lay min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
