import React from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import H1image from "../../Assets/images/FireplaceServices/hero img 1.png";
import H2image from "../../Assets/images/FireplaceServices/hero img 2.png";
import H3image from "../../Assets/images/FireplaceServices/hero img 3.png";
import H4image from "../../Assets/images/FireplaceServices/hero img 4.png";
import H5image from "../../Assets/images/FireplaceServices/hero img 5.png";
import "../commonstyles.css"; // Import the global CSS file

const FireplaceServices = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PagesHeader title="Fireplace Services" imagePath={H1image} />
        <div className="inner-container">
          <div className="section">
            <div className="section-title">● Our Projects</div>
            <div className="section-header">
              HT Construction: Igniting Style, Warming Hearts.
            </div>
            <div className="section-text">
              <div>
                Welcome to HT Construction's Fireplace Service, where warmth and
                style converge to create captivating focal points in homes
                across Canada. Our commitment to excellence extends beyond
                bricks and mortar; we craft fireplace experiences that redefine
                the ambiance of your living spaces.
              </div>
              <div>
                The journey begins with a personalized consultation, where our
                skilled team collaborates closely with you to understand your
                vision. Whether you desire the timeless charm of a traditional
                hearth or the sleek lines of a contemporary masterpiece, our
                Fireplace Service is designed to bring your aspirations to life.
              </div>
            </div>
          </div>
          <div className="images-row">
            <img
              src={H1image}
              className="img-65"
              alt="Fireplace Service -   1"
            />
            <img
              src={H2image}
              className="img-35"
              alt="Fireplace Service -   2"
            />
          </div>
        </div>
        <div className="inner-container">
          <div className="section-text" style={{ gap: "200px" }}>
            <div>
              Craftsmanship is the cornerstone of our Fireplace Service. We
              source premium materials and employ skilled artisans to
              meticulously construct fireplaces that not only exude elegance but
              also provide a source of comfort and warmth. Our expertise extends
              to various styles, from classic stone hearths to modern,
              minimalist designs, ensuring that each fireplace is a bespoke
              creation tailored to your home.
            </div>
            <div>
              At HT Construction, we understand that a fireplace is more than
              just a functional element; it's a statement that enhances the
              overall aesthetic of your living space. Our Fireplace Service goes
              beyond installation; it's about creating an immersive experience
              that transforms your home into a cozy retreat, a place where
              family and friends gather to share warmth and make lasting
              memories.
            </div>
          </div>
          <div className="images-row">
            <img
              src={H3image}
              className="img-35"
              alt="Fireplace Service -   3"
            />
            <img
              src={H4image}
              className="img-65"
              alt="Fireplace Service -   4"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="bottom-content">
            <div style={{ width: "40%" }}>
              Elevate your living spaces with HT Construction's Fireplace
              Service – where every flame tells a story, and every design choice
              reflects your personal narrative. Trust us to kindle the perfect
              blend of style and comfort in your home, one fireplace at a time.
            </div>
          </div>
          <div>
            <img
              src={H5image}
              className="images-full"
              alt="Fireplace Service -   5"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FireplaceServices;
