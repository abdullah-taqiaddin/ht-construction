"use client";
import "./HomePage.css"; // Create a CSS file for HomePage layout
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button } from "@chakra-ui/react";
import { ReactComponent as BtnIcon } from "../../Assets/icons/buttonIcon.svg";

import HouseIcon from "../../Assets/icons/home-icn.svg";
import ClostIcon from "../../Assets/icons/closes-icn.svg";
import GateIcon from "../../Assets/icons/gate-creation-icn.svg";
import FireplaceIcon from "../../Assets/icons/fireplace-icn.svg";
import KIcon from "../../Assets/icons/Component 1/Type9.svg";
import StairsIcon from "../../Assets/icons/stairs-icn.svg";
import DecksIcon from "../../Assets/icons/decks-icn.svg";
import BathIcon from "../../Assets/icons/sinks-icn.svg";

import dreamhouseimg from "../../Assets/images/Dreamhome.png";
const ServiceRow = ({
  title,
  description,
  icn,
}: {
  title: string;
  description: string;
  icn: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "50px 80px 50px 80px",
        justifyContent: "space-between",
        border: "1px solid #191F2833",
        borderLeft: "0px",
        borderRight: "0px",
        borderTop: "0px",
      }}
    >
      <div
        style={{
          background: "#191F28",
          borderRadius: "100%",
          padding: "1rem",
          height: "100%",
        }}
      >
        <img
          src={icn}
          style={{ width: "24px", height: "24px" }}
          alt="service icon image"
        />
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "500",
          maxWidth: "460px",
          minWidth: "460px",
          textAlign: "left",
          lineHeight: "52.8px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "22px",
          fontWeight: "400",
          maxWidth: "500px",
          textAlign: "left",
        }}
      >
        {description}
      </div>
      <div>
        <BtnIcon />
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <main
        style={{
          padding: "80px",
          backgroundColor: "#F6F7F9",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            marginRight: "-80px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left Text Section */}
          <div
            style={{
              textAlign: "left",
              width: "50%",
            }}
          >
            <h1
              style={{
                fontSize: "144px",
                fontWeight: "regular",
                marginBottom: "20px",
                lineHeight: "144px",
              }}
            >
              Ready to Redefine Your{" "}
              <span style={{ color: "#c4a24d" }}>Home?</span>
            </h1>
            <p
              style={{
                fontWeight: "400",

                fontSize: "22px",
                lineHeight: "28.6px",
                marginBottom: "2rem",
              }}
            >
              HT Construction, your premier home transformation experts in
              Canada. Elevate your lifestyle with our cutting-edge designs and
              innovative solutions. Whether you're looking to modernize your
              interiors, create a cozy haven, or enhance your home's
              functionality, we've got you covered.
            </p>
            <Button
              style={{
                backgroundColor: "#c4a24d",
                color: "#fff",
                border: "unset",
                borderRadius: "1.8rem",
                padding: "1.7rem",
                paddingRight: "0.5rem",
              }}
              rightIcon={<BtnIcon />}
            >
              Schedule a Consultation{" "}
            </Button>
          </div>

          {/* Right Image Section */}
          <div
            style={{
              maxWidth: "600px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Fireplace Services"
              style={{ width: "100%", height: "auto" }}
            />
            <div
              style={{
                padding: "20px",
                backgroundColor: "#00000099",
                color: "#fff",
                borderRadius: "0 0 20px 20px",
                marginTop: "-5px",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                Fireplace Services
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                Our expert team is dedicated to creating inviting, cozy spaces
                that center around the heart of your home – the fireplace.
                Whether you're dreaming of a traditional hearth or a sleek
                modern design, we specialize in crafting bespoke fireplace
                solutions.
              </p>
            </div>
          </div>
        </section>
        <section
          style={{
            margin: "-80px",
            marginBottom: "0px",
            marginTop: "0px",
            padding: "100px 80px",
            backgroundColor: "#191F28",
            color: "#FFF",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left Section: Subtitle and Title */}
            <div
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  color: "#c4a24d",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                ● Our Projects
              </div>
              <div
                style={{
                  fontSize: "86px",
                  fontWeight: "400",
                  lineHeight: "1.2",
                  textAlign: "left",
                }}
              >
                Your Vision, Our Expertise:
                <br />
                Home Renovation Masterpieces.
              </div>
            </div>

            {/* Right Section: Description */}
            <div style={{ textAlign: "left", width: "20%" }}>
              <div
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#DEDEDE",
                }}
              >
                Step into a world of exceptional craftsmanship and
                transformative design with HT Construction, your premier partner
                for comprehensive home renovations in Canada. Our expertise
                extends across a spectrum of services, ensuring every aspect of
                your home reflects your unique style and functional needs.
              </div>
            </div>
          </div>

          {/* Image Section with slider */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left Image */}
            <div
              style={{
                flex: 1,
                marginRight: "20px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src="/path-to-your-image.jpg" // Replace with your image path
                alt="Project 1"
                style={{ width: "100%", height: "auto", borderRadius: "20px" }}
              />
            </div>

            {/* Right Image */}
            <div
              style={{
                flex: 1,
                marginLeft: "20px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src="/path-to-another-image.jpg" // Replace with your second image path
                alt="Project 2"
                style={{ width: "100%", height: "auto", borderRadius: "20px" }}
              />
            </div>
          </div>

          {/* Slider Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                color: "#333",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              ←
            </button>
            <div
              style={{
                height: "4px",
                backgroundColor: "#c4a24d",
                width: "200px",
                borderRadius: "5px",
              }}
            ></div>
            <button
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                color: "#333",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              →
            </button>
          </div>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "-80px",
            marginBottom: "0px",
            marginTop: "0px",
          }}
        >
          <ServiceRow
            title="Full House Renovation"
            description="Revitalize your entire living space with our Full House Renovation services. From modern updates to timeless transformations, we turn your vision into a revitalized reality. Elevate every corner of your home with precision and style."
            icn={HouseIcon}
          />
          <ServiceRow
            title="Closets and Cabinets"
            description="From sleek storage solutions to bespoke designs, we tailor cabinets to enhance functionality and elevate aesthetics. Experience organization and style seamlessly integrated into every room."
            icn={ClostIcon}
          />
          <ServiceRow
            title="Custom Gate Creation"
            description="Our expertly crafted gates not only safeguard your property but also add a touch of elegance to your entrance."
            icn={GateIcon}
          />
          <ServiceRow
            title="Fireplace Master Services"
            description="From classic charm to contemporary focal points, we specialize in crafting fireplaces that redefine the heart of your living space."
            icn={FireplaceIcon}
          />
          <ServiceRow
            title="Modern Kitchen Innovations Services"
            description="From modern flair to timeless elegance, we specialize in creating bespoke kitchens that harmonize functionality and style."
            icn={KIcon}
          />
          <ServiceRow
            title="Stairs and Railings"
            description="From sleek storage solutions to bespoke designs, we tailor cabinets to enhance functionality and elevate aesthetics. Experience organization and style seamlessly integrated into every room."
            icn={StairsIcon}
          />
          <ServiceRow
            title="Decks and Fences"
            description="We Provide premium outdoor solutions, dedicated to enhancing your property's aesthetics, functionality, and privacy."
            icn={DecksIcon}
          />
          <ServiceRow
            title="Bathrooms"
            description="From contemporary spa-inspired designs to timeless classics, we offer comprehensive bathroom design services tailored to your unique preferences and lifestyle."
            icn={BathIcon}
          />
        </section>
        <section
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%",
            backgroundImage: `url(${dreamhouseimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            overflow: "hidden",
            margin: "40px 0",
          }}
        ></section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
