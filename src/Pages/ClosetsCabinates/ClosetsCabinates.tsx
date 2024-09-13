import React from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import H1image from "../../Assets/images/CabinatesClosets/Hero img 1.png";
import H2image from "../../Assets/images/CabinatesClosets/hero img 2.png";
import H3image from "../../Assets/images/CabinatesClosets/hero img 3.png";
import H4image from "../../Assets/images/CabinatesClosets/hero img 4.png";
import H5image from "../../Assets/images/CabinatesClosets/hero img 5.png";
import "../commonstyles.css"; // Import the global CSS file

const ClosetsCabinates = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PagesHeader title="Closets and Cabinets" imagePath={H1image} />
        <div className="inner-container">
          <div className="section">
            <div className="section-title">● Our Projects</div>
            <div className="section-header">
              Elevate Your Home with Precision and Style
            </div>
            <div className="section-text">
              <div>
                Welcome to HT Construction, where our Cabinet Services redefine
                the art of organization and elevate the aesthetic appeal of your
                living spaces across Canada. At HT Construction, we understand
                that cabinets are more than just storage solutions—they are a
                reflection of your unique style, preferences, and the essence of
                your home. Our comprehensive Cabinet Services at HT Construction
                commence with a collaborative design process.
              </div>
              <div>
                Our team of experts engages with you to understand your vision,
                lifestyle, and the specific needs of your spaces. Whether you're
                looking to revamp your kitchen with modern, sleek cabinets,
                seeking sophisticated storage solutions for your living areas,
                or aiming for a bespoke organizational system for your office,
                our meticulous approach ensures that every detail aligns with
                your goals.
              </div>
            </div>
          </div>
          <div className="images-row">
            <img
              src={H1image}
              className="img-65"
              alt="Cabinets and Closets -   1"
            />
            <img
              src={H2image}
              className="img-35"
              alt="Cabinets and Closets -   2"
            />
          </div>
        </div>
        <div className="inner-container">
          <div className="section-text" style={{ gap: "200px" }}>
            <div>
              Step into a world of organized luxury and bespoke design with HT
              Construction's Cabinet Services. Trust us to redefine your
              interiors, delivering not just storage solutions but an enduring
              testament to the beauty of precision and style. Your vision, our
              expertise—let's create something exceptional together. HT
              Construction isn't just about cabinets; we craft organized living
              experiences. Forget bland storage solutions – our Cabinet Services
              redefine your spaces, blending functionality with breathtaking
              design.
            </div>
            <div>
              Imagine: Modern, sleek cabinets transforming your kitchen into a
              culinary haven. Sophisticated storage that declutters your living
              areas and exudes elegance. Bespoke organizational systems turning
              your office into a productive oasis. HT Construction makes it a
              reality. Our Approach: Collaborative Design: We listen. We
              understand your vision, lifestyle, and space needs. Your dream
              becomes our blueprint. MetICULOUS Execution: Our experts translate
              your vision into flawless craftsmanship and meticulous attention
              to detail. Organized Luxury: We deliver more than storage – we
              deliver an experience. Step into a world of beauty, precision, and
              enduring style.
            </div>
          </div>
          <div className="images-row">
            <img
              src={H3image}
              className="img-35"
              alt="Cabinets and Closets -   3"
            />
            <img
              src={H4image}
              className="img-65"
              alt="Cabinets and Closets -   4"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="bottom-content">
            <div>
              At HT Construction, we believe that true beauty lies not just in
              the surface, but in the seamless fusion of form and function.
            </div>
            <div>
              Our cabinets are more than wood and metal; they are testaments to
              the power of collaboration, the precision of craftsmanship, and
              the enduring legacy of a space that truly reflects you. Step into
              your organized future with HT Construction. Let your cabinets be
              the canvas upon which you paint the masterpiece of your life.
            </div>
          </div>
          <div>
            <img
              src={H5image}
              className="images-full"
              alt="Cabinets and Closets -   5"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClosetsCabinates;
