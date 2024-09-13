import React from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import H1image from "../../Assets/images/CustomGate/hero img 1.png";
import H2image from "../../Assets/images/CustomGate/hero img 2.png";
import H3image from "../../Assets/images/CustomGate/hero img 3.png";
import H4image from "../../Assets/images/CustomGate/hero img 4.png";
import "../commonstyles.css"; // Import the global CSS file

const CustomGates = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PagesHeader title="Custom Gate Creations" imagePath={H1image} />
        <div className="inner-container">
          <div className="section">
            <div className="section-title">● Our Projects</div>
            <div className="section-header">
              HT Construction: Where Security Meets Elegance in Every Gate.
            </div>
            <div className="section-text">
              <div>
                Step into a realm of security and sophistication with HT
                Construction's Custom Gates Service.
              </div>
              <div>
                Our Custom Gates Service begins with a thorough consultation.
              </div>
            </div>
          </div>
          <div className="images-row">
            <img src={H1image} className="img-65" alt="Custom Gates -   1" />
            <img src={H2image} className="img-35" alt="Custom Gates -   2" />
          </div>
        </div>
        <div className="inner-container">
          <div className="section-text" style={{ gap: "200px" }}>
            <div>
              Craftsmanship is our cornerstone. We source high-quality
              materials.
            </div>
            <div>
              Trust HT Construction to safeguard your property with a touch of
              elegance.
            </div>
          </div>
          <div className="images-row">
            <img
              src={H3image}
              className="images-full"
              alt="Custom Gates -   3"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="bottom-content">
            <div style={{ width: "70%" }}>
              With HT Construction, you're not just choosing a barrier.
            </div>
            <div>
              Beyond the practical need for protection, a custom gate stands as
              a silent storyteller.
            </div>
          </div>
          <div>
            <img
              src={H4image}
              className="images-full"
              alt="Custom Gates -   4"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomGates;
