import { useEffect } from "react";
import homeImg from "../../assets/avataaars.svg";
import "./Home.css";
const Home = () => {
  useEffect(() => {
    document.title = "home";
  }, []);
  return (
    <div className="Home d-flex flex-column justify-content-center align-items-center pt-5 text-center ">
      <img src={homeImg} className="w-25 mt-3" alt="homeAvatarImage" />
      <h1 className="text-uppercase text-white mt-5 ">start framework</h1>
      <div className="lines d-flex justify-content-center align-items-center gap-3">
        <div className="lineOne"></div>
        <div className="star">
          <i className="fas fa-star text-white"></i>
        </div>
        <div className="lineTwo"></div>
      </div>
      <div className="titles">
        <p className="text-white mt-4 position-relative">Graphic Artist - Web Designer - Illustrator</p>
        <div className="lineTil"></div>
      </div>
    </div>
  );
};

export default Home;
