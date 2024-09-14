import Img1 from "../../Assets/images/Gallery/CabinatesClostes/1.png";
import Img2 from "../../Assets/images/Gallery/CabinatesClostes/2.png";
import Img3 from "../../Assets/images/Gallery/CabinatesClostes/3.png";
import Img4 from "../../Assets/images/Gallery/CabinatesClostes/4.png";
import Img5 from "../../Assets/images/Gallery/CabinatesClostes/5.png";
import Img6 from "../../Assets/images/Gallery/CabinatesClostes/6.png";
import Img7 from "../../Assets/images/Gallery/CabinatesClostes/7.png";
import Img8 from "../../Assets/images/Gallery/CabinatesClostes/8.png";
import Img9 from "../../Assets/images/Gallery/CabinatesClostes/9.png";

import Img11 from "../../Assets/images/Gallery/CabinatesClostes/11.png";

import Img12 from "../../Assets/images/Gallery/CabinatesClostes/12.png";

import Img13 from "../../Assets/images/Gallery/CabinatesClostes/13.png";
import Img14 from "../../Assets/images/Gallery/CabinatesClostes/14.png";


import "./CabinatesClostes.css";
const CabinatesClostes = () => {
  return (
    <div>
      <div className="gallery">
        {/* First Row */}
        <div className="row">
          <div className="column">
            <img src={Img1} alt="Project 1" className="half" />
            <img src={Img2} alt="Project 2" className="half" />
          </div>
          <div className="column">
            <img src={Img3} alt="Project 3" className="full" />
          </div>
          <div className="column">
            <img src={Img4} alt="Project 4" className="full" />
            <img src={Img5} alt="Project 5" className="full" />
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="column">
            <img src={Img5} alt="Project 5" className="full" />
          </div>
          <div className="column">
            <img src={Img6} alt="Project 6" className="full" />
            <div className="column">
              <img src={Img7} alt="Project 7" className="full" />
            </div>
          </div>
          <div className="column">
            <img src={Img8} alt="Project 8" className="half" />
            <img src={Img9} alt="Project 9" className="half" />
          </div>
        </div>

        {/* Fourth Row */}
        {/* <div className="row">
          <div className="column">
            <img src={Img11} alt="Project 11" className="half" />
          </div>
          <div className="column">
            <div className="row">
              <img
                src={Img13}
                alt="Project 13"
                className="half"
                style={{ height: "100%" }}
              />
              <img
                src={Img12}
                alt="Project 12"
                className="half"
                style={{ height: "100%" }}
              />
            </div>
            <div className="row">
              <img src={Img14} alt="Project 14" className="half" />
            </div>
          </div>
        </div> */}
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
            <img src={Img11} alt="Kitchen 1" className="full" />
          </div>

          {/* Second Column */}
          <div className="column">
            {/* First row - 50/50 width */}
            <div className="row" style={{ gap: "5px" }}>
              <img
                src={Img13}
                alt="Kitchen 2"
                className="half"
                style={{ width: "50%", height: "100%" }}
              />
              <img
                src={Img12}
                alt="Kitchen 3"
                className="half"
                style={{ width: "48%", height: "100%" }}
              />
            </div>
            {/* Second row - Full width */}
            <div className="row">
              <img
                src={Img14}
                alt="Kitchen 4"
                className="full"
                style={{ height: "124%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinatesClostes;
