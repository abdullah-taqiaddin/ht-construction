import Img1 from "../../Assets/images/Gallery/RailsStairs/1.png";
import Img2 from "../../Assets/images/Gallery/RailsStairs/2.png";
import Img3 from "../../Assets/images/Gallery/RailsStairs/3.png";
import Img4 from "../../Assets/images/Gallery/RailsStairs/4.png";
import Img5 from "../../Assets/images/Gallery/RailsStairs/5.png";
import Img6 from "../../Assets/images/Gallery/RailsStairs/6.png";
import Img7 from "../../Assets/images/Gallery/RailsStairs/7.png";
import Img8 from "../../Assets/images/Gallery/RailsStairs/8.png";
import Img9 from "../../Assets/images/Gallery/RailsStairs/9.png";
import Img10 from "../../Assets/images/Gallery/RailsStairs/10.png";

import Img11 from "../../Assets/images/Gallery/RailsStairs/11.png";

import Img12 from "../../Assets/images/Gallery/RailsStairs/12.png";
import Img13 from "../../Assets/images/Gallery/RailsStairs/13.png";

import "./RailsStairs.css";
const RailsStairs = () => {
  return (
    <div>
      <div className="gallery">
        {/* First Row */}
        <div className="row">
          {/* First Column - 50/50 height */}
          <div className="column">
            <img src={Img1} alt="Gallery 1" className="half" />
            <img src={Img2} alt="Gallery 2" className="half" />
          </div>

          {/* Second Column - Full height */}
          <div className="column">
            <img src={Img3} alt="Gallery 3" className="full" />
          </div>

          {/* Third Column - 65/35 height */}
          <div className="column">
            <img src={Img4} alt="Gallery 4" style={{ height: "65%" }} />
            <img src={Img5} alt="Gallery 5" style={{ height: "35%" }} />
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          {/* First Column - Full height */}
          <div className="column">
            <img src={Img6} alt="Gallery 6" className="full" />
          </div>

          {/* Second Column - 50/50 height */}
          <div className="column">
            <img src={Img7} alt="Gallery 7" className="half" />
            <img src={Img8} alt="Gallery 8" className="half" />
          </div>

          {/* Third Column - 35/65 height */}
          <div className="column">
            <img src={Img9} alt="Gallery 9" style={{ height: "35%" }} />
            <img src={Img10} alt="Gallery 10" style={{ height: "65%" }} />
          </div>
        </div>

        {/* Third Row */}
        <div className="row">
          {/* First Column - 30% width, Full height */}
          <div className="column" style={{ width: "20%" }}>
            <img src={Img11} alt="Gallery 11" className="full" />
          </div>

          {/* Second Column - 70% width, Two 50/50 Gallerys */}
          <div className="column" style={{ width: "70%" }}>
            <img src={Img12} alt="Gallery 12" className="half" />
            <img src={Img13} alt="Gallery 13" className="half" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RailsStairs;
