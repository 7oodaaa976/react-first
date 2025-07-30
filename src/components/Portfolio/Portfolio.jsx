import { useEffect, useState } from "react";
import "./portfolio.css";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

let portImgs = [img1, img2, img3, img1, img2, img3];

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="portfolio py-5">
      <h2 className="text-center mt-5 text-uppercase fw-bold fs-1">
        portfolio component
      </h2>
      <div className="starTwo d-flex justify-content-center align-items-center m-3 ">
        <i className="fas fa-star position-relative"></i>
      </div>
      <div className="container">
        <div className="row g-3">
          {portImgs.map((item, itr) => (
            <div className="col-md-4" key={itr}>
              <div
                onClick={() => setSelectedImage(item)}
                className="inner position-relative"
              >
                <img src={item} className="w-100" alt="portfolioImage" />
                <div className="layer position-absolute d-flex justify-content-center align-items-center">
                  <span>➕</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="test position-fixed top-0 start-0 end-0 bottom-0 bg-black bg-opacity-50 d-flex justify-content-center align-items-center"
        >
          <img src={selectedImage} className="w-50" alt="portfolioImage" />
        </div>
      )}
    </div>
  );
}
