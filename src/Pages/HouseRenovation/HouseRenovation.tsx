import React from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HImage from "../../Assets/images/full-house.png";
import H1image from "../../Assets/images/HouseRenovation/first hero image.png";
import H2image from "../../Assets/images/HouseRenovation/second hero image.png";
import H3image from "../../Assets/images/HouseRenovation/third hero image.png";

import "../commonstyles.css";
import "./HouseRenovation.css";

const HouseRenovation = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "rgba(246, 247, 249, 1)",
          gap: "15px",
        }}
      >
        <PagesHeader
          title="Full House Renovation Services"
          imagePath={HImage}
        />
        <div className="house-renovation-section">
          <div className="house-renovation-content">
            <div className="house-renovation-title">● Our Projects</div>
            <div className="house-renovation-header">
              Your Full House Renovation Experts!
            </div>
            <div className="house-renovation-description">
              <div className="house-renovation-text">
                Welcome to HT Construction, your premier destination for full
                house renovation services in Canada! At HT Construction, we
                recognize that a home is more than just walls and ceilings—it's
                a reflection of your unique style, personality, and aspirations.
                Our dedicated team of seasoned professionals takes pride in
                offering a comprehensive and tailored approach to full house
                renovations.
              </div>
              <div>
                From conceptualization to completion, we seamlessly integrate
                your vision with our expertise, ensuring a truly personalized
                and extraordinary outcome. Our wealth of experience sets us
                apart, allowing us to tackle a diverse range of renovation
                projects with precision and skill. Whether you're envisioning a
                modern overhaul, a classic revival, or a combination of styles,
                HT Construction has the knowledge and proficiency to bring your
                dreams to life.
              </div>
            </div>
          </div>
          <div className="house-renovation-image">
            <img src={H1image} alt="House Renovation - First Hero" />
          </div>
        </div>
        <div className="bottom-section">
          <div className="bottom-content">
            <div>
              We understand the significance of communication throughout the
              renovation process. Our commitment to transparent and open
              dialogue ensures that you are informed and involved at every step.
              This collaborative approach allows us to address your concerns,
              incorporate your feedback, and guarantee a final result that
              exceeds expectations. Quality craftsmanship is the cornerstone of
              HT Construction.
            </div>
            <div>
              Our team of artisans and skilled professionals pays meticulous
              attention to detail, from structural enhancements to aesthetic
              upgrades. The result is a home that not only meets but surpasses
              industry standards, providing you with a living space that
              seamlessly blends form and function. Timeliness is of the essence
              in the world of renovations, and we respect your time. HT
              Construction employs efficient project management practices to
              deliver your full house renovation within the agreed-upon
              timeframe. Our streamlined processes ensure that your vision is
              realized without unnecessary delays.
            </div>
          </div>
          <div>
            <img
              src={H2image}
              className="images-full"
              alt="House Renovation - Second Hero "
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="bottom-content">
            <div>
              We appreciate the importance of adhering to budgets without
              compromising quality. HT Construction provides cost-effective
              solutions without cutting corners, allowing you to enjoy a
              stunning renovation that aligns with your financial expectations.
              As a fully licensed and insured renovation service provider, HT
              Construction brings credibility and accountability to every
              project.
            </div>
            <div>
              You can trust us to navigate industry regulations and standards,
              ensuring a smooth and worry-free renovation experience. Your home
              is a canvas, and HT Construction is here to paint it with
              innovation, expertise, and a commitment to excellence. Embark on
              your full house renovation journey with us, and let us turn your
              house into the extraordinary home you've always dreamed of.
            </div>
          </div>
          <div>
            <img
              src={H3image}
              className="images-full"
              alt="House Renovation - Third Hero"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HouseRenovation;
