import Img1 from "../../Assets/images/Gallery/Bathroom/1.png";
import Img2 from "../../Assets/images/Gallery/Bathroom/2.png";
import Img3 from "../../Assets/images/Gallery/Bathroom/3.png";
import Img4 from "../../Assets/images/Gallery/Bathroom/4.png";
import Img5 from "../../Assets/images/Gallery/Bathroom/5.png";
import Img6 from "../../Assets/images/Gallery/Bathroom/6.png";
import Img7 from "../../Assets/images/Gallery/Bathroom/7.png";
import Img8 from "../../Assets/images/Gallery/Bathroom/8.png";
import Img9 from "../../Assets/images/Gallery/Bathroom/9.png";
import Img10 from "../../Assets/images/Gallery/Bathroom/10.png";

import "./BathroomGallery.css";
const BathroomGallery = () => {
  return (
    <div>
      <div className="gallery">
        {/* First Row */}
        <div className="row">
          <div className="column">
            <img src={Img1} alt="Bathroom 1" className="half" />
            <img src={Img2} alt="Bathroom 2" className="half" />
          </div>
          <div className="column">
            <img src={Img3} alt="Bathroom 3" className="full" />
          </div>
          <div className="column">
            <img src={Img4} alt="Bathroom 4" className="half" />
            <img src={Img5} alt="Bathroom 5" className="half" />
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="column">
            <img src={Img6} alt="Bathroom 6" className="full" />
          </div>
          <div className="column">
            <img src={Img7} alt="Bathroom 7" className="half" />
            <img src={Img8} alt="Bathroom 8" className="half" />
          </div>
          <div className="column">
            <img src={Img9} alt="Bathroom 9" className="thirty" />
            <img src={Img10} alt="Bathroom 10" className="seventy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathroomGallery;
