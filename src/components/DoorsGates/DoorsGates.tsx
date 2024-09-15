import Img1 from "../../Assets/images/Gallery/DoorsGates/1.png";
import Img2 from "../../Assets/images/Gallery/DoorsGates/2.png";
import Img3 from "../../Assets/images/Gallery/DoorsGates/3.png";
import Img4 from "../../Assets/images/Gallery/DoorsGates/4.png";
import Img5 from "../../Assets/images/Gallery/DoorsGates/5.png";
import Img6 from "../../Assets/images/Gallery/DoorsGates/6.png";

import Img7 from "../../Assets/images/Gallery/DoorsGates/7.png";
import Img8 from "../../Assets/images/Gallery/DoorsGates/8.png";

import Img9 from "../../Assets/images/Gallery/DoorsGates/9.png";
import Img10 from "../../Assets/images/Gallery/DoorsGates/10.png";
import Img11 from "../../Assets/images/Gallery/DoorsGates/11.png";
import Img12 from "../../Assets/images/Gallery/DoorsGates/12.png";

import Img13 from "../../Assets/images/Gallery/DoorsGates/13.png";
import Img14 from "../../Assets/images/Gallery/DoorsGates/14.png";

import Img15 from "../../Assets/images/Gallery/DoorsGates/15.png";
import Img16 from "../../Assets/images/Gallery/DoorsGates/16.png";

import "./DoorsGates.css";

const DoorsGates = () => {
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
              width: "35%",
              //height: "61.3rem",
            }}
          >
            <img src={Img1} alt="Kitchen 1" className="full" />
          </div>

          {/* Second Column */}
          <div className="column">
            {/* First row - 50/50 width */}
            <div className="row" style={{ gap: "5px" }}>
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
              <img
                src={Img4}
                alt="Kitchen 4"
                className="full"
                style={{ height: "124%" }}
              />
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
        {/* Third Row */}
        <div className="column">
          {/* First row with 70/30 width split */}
          <div className="row" style={{ gap: "5px", height: "300px" }}>
            <img
              src={Img9}
              alt="Gallery 9"
              style={{ width: "70%", height: "100%" }}
            />
            <img
              src={Img10}
              alt="Gallery 10"
              style={{ width: "30%", height: "100%" }}
            />
          </div>

          {/* Second row with 30/70 width split */}
          <div className="row" style={{ gap: "5px", height: "300px" }}>
            <img
              src={Img11}
              alt="Gallery 11"
              style={{ width: "30%", height: "100%" }}
            />
            <img
              src={Img12}
              alt="Gallery 12"
              style={{ width: "70%", height: "100%" }}
            />
          </div>
        </div>

        {/* Forth Row */}
        <div className="row">
          {/* First Column - 50/50 height */}
          <div className="column">
            <img src={Img13} alt="Kitchen 5" className="half" />
            <img src={Img14} alt="Kitchen 6" className="half" />
          </div>

          {/* Second Column - Full height */}
          <div className="column">
            <img src={Img15} alt="Kitchen 7" className="full" />
          </div>

          {/* Third Column - 10% height */}
          <div className="column">
            <img src={Img16} alt="Kitchen 8" className="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorsGates;
