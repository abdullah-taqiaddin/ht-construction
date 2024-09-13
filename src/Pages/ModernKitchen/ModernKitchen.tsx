import React from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import H1image from "../../Assets/images/ModernKitchenServices/hero img 1.png";
import H2image from "../../Assets/images/ModernKitchenServices/hero img 2.png";
import H3image from "../../Assets/images/ModernKitchenServices/hero img 3.png";
import H4image from "../../Assets/images/ModernKitchenServices/hero img 4.png";
import H5image from "../../Assets/images/ModernKitchenServices/hero img 5.png";
import "../commonstyles.css"; // Import the global CSS file

const ModernKitchenServices = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PagesHeader title="Modern Kitchen Services" imagePath={H1image} />
        <div className="inner-container">
          <div className="section">
            <div className="section-title">● Our Projects</div>
            <div className="section-header">
              HT Construction: Igniting Style, Warming Hearts.
            </div>
            <div className="section-text">
              <div>
                Embark on a culinary journey of innovation and elegance with HT
                Construction's Kitchen Renovation Service, where we redefine the
                heart of your home with meticulous design and skilled
                craftsmanship across Canada.
              </div>
              <div>
                Our comprehensive approach to kitchen renovations begins with a
                collaborative consultation, delving into your unique
                preferences, lifestyle, and functional needs.
              </div>
            </div>
          </div>
          <div className="images-row">
            <img
              src={H1image}
              className="img-65"
              alt="Modern Kitchen Services -   1"
            />
            <img
              src={H2image}
              className="img-35"
              alt="Modern Kitchen Services -   2"
            />
          </div>
        </div>
        <div className="inner-container">
          <div className="section-text" style={{ gap: "200px" }}>
            <div>
              Craftsmanship is at the forefront of our Kitchen Renovation
              Service. We source premium materials and utilize cutting-edge
              techniques to create not only visually stunning kitchens but also
              spaces that enhance efficiency and functionality.
            </div>
            <div>
              At HT Construction, we understand that the kitchen is more than a
              cooking space; it's a central hub for family gatherings,
              socializing, and culinary creativity.
            </div>
          </div>
          <div className="images-row">
            <img
              src={H3image}
              className="img-35"
              alt="Modern Kitchen Services -   3"
            />
            <img
              src={H4image}
              className="img-65"
              alt="Modern Kitchen Services -   4"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="bottom-content">
            <div>
              Whether you seek a complete overhaul or a strategic upgrade, our
              Kitchen Renovation Service is designed to elevate your lifestyle.
            </div>
            <div>
              Trust us to transform your kitchen into a harmonious blend of
              style and functionality, creating a space where inspiration and
              innovation flourish.
            </div>
          </div>
          <div>
            <img
              src={H5image}
              className="images-full"
              alt="Modern Kitchen Services -   5"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModernKitchenServices;
