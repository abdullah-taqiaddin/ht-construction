import Img1 from "../../Assets/images/Gallery/Kitchen/Container.png";
import Img2 from "../../Assets/images/Gallery/Kitchen/2.png";
import Img3 from "../../Assets/images/Gallery/Kitchen/3.png";
import Img4 from "../../Assets/images/Gallery/Kitchen/4.png";
import Img5 from "../../Assets/images/Gallery/Kitchen/5.png";
import Img6 from "../../Assets/images/Gallery/Kitchen/6.png";

import Img7 from "../../Assets/images/Gallery/Kitchen/7.png";
import Img8 from "../../Assets/images/Gallery/Kitchen/8.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./KitchenGallery.css";

const KitchenGallery = () => {
  return (
    <div>
      <div className="gallery">
        {/* First Row */}
        <div className="row">
          {/* First Column - 100% height */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "61.3rem",
            }}
          >
            <img src={Img1} alt="Kitchen 1" className="full" />
          </div>

          {/* Second Column */}
          <div className="column">
            {/* First row - 50/50 width */}
            <div className="row">
              <img
                src={Img2}
                alt="Kitchen 2"
                className="half"
                style={{ width: "50%", height: "100%" }}
              />
              <img
                src={Img3}
                alt="Kitchen 3"
                className="half"
                style={{ width: "48%", height: "100%" }}
              />
            </div>
            {/* Second row - Full width */}
            <div className="row">
              <img src={Img4} alt="Kitchen 4" className="full" />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          {/* First Column - 50/50 height */}
          <div className="column">
            <img src={Img5} alt="Kitchen 5" className="half" />
            <img src={Img6} alt="Kitchen 6" className="half" />
          </div>

          {/* Second Column - Full height */}
          <div className="column">
            <img src={Img7} alt="Kitchen 7" className="full" />
          </div>

          {/* Third Column - 10% height */}
          <div className="column">
            <img src={Img8} alt="Kitchen 8" className="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenGallery;
