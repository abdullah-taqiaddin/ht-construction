"use client";
import "./HomePage.css"; // Create a CSS file for HomePage layout
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button } from "@chakra-ui/react";
import { ReactComponent as BtnIcon } from "../../Assets/icons/buttonIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fireplaceImage from "../../Assets/images/landingpage-hero.png";

// Icons (You can use Chakra UI icons or react-icons)
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import type { Swiper as SwiperCore } from "swiper";

import carouselImage1 from "../../Assets/images/carousel-img-1.png";
import carouselImage2 from "../../Assets/images/carousel-image-2.png";

import HouseIcon from "../../Assets/icons/home-icn.svg";
import ClostIcon from "../../Assets/icons/closes-icn.svg";
import GateIcon from "../../Assets/icons/gate-creation-icn.svg";
import FireplaceIcon from "../../Assets/icons/fireplace-icn.svg";
import KIcon from "../../Assets/icons/Component 1/Type9.svg";
import StairsIcon from "../../Assets/icons/stairs-icn.svg";
import DecksIcon from "../../Assets/icons/decks-icn.svg";
import BathIcon from "../../Assets/icons/sinks-icn.svg";

import dreamhouseimg from "../../Assets/images/Dreamhome.png";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import ServiceRow from "../../components/ServiceCard/ServiceCard";

const Homepage = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
        <section className="hero-section">
          {/* Left Text Section */}
          <div className="hero-text">
            <h1 className="hero-title">
              Ready to Redefine Your{" "}
              <span className="hero-title-highlight">Home?</span>
            </h1>
            <p className="hero-description">
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
                border: "none",
                borderRadius: "1.8rem",
                padding: "1.7rem 0.5rem 1.7rem 1.7rem",
              }}
              rightIcon={<BtnIcon />}
            >
              Schedule a Consultation
            </Button>
          </div>

          <div className="hero-image">
            <img src={fireplaceImage} alt="Fireplace Services" />
            <div className="gradient-overlay"></div>
            <div className="text-overlay">
              <div className="text-overlay-content">
                <div className="text-overlay-title">FirePlace Services</div>
                <div className="text-overlay-description">
                  <div>
                    Our expert team is dedicated to creating inviting, cozy
                    spaces that center around the heart of your home - the
                    fireplace.
                  </div>

                  <div>
                    Whether you’re dreaming of a traditional hearth or a sleek
                    modern design, we specialize in crafting bespoke fireplace
                    solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Projects Section with Swiper */}
        <section className="projects-section">
          <div className="project-section-sub">
            {/* Left Section: Subtitle and Title */}
            <div className="project-left">
              <div className="project-subtitle">● Our Projects</div>
              <div className="project-title">
                Your Vision, Our Expertise:
                <br />
                Home Renovation Masterpieces.
              </div>
            </div>

            {/* Right Section: Description */}
            <div className="project-right">
              <div className="project-description">
                Step into a world of exceptional craftsmanship and
                transformative design with HT Construction, your premier partner
                for comprehensive home renovations in Canada. Our expertise
                extends across a spectrum of services, ensuring every aspect of
                your home reflects your unique style and functional needs.
              </div>
            </div>
          </div>

          <div>
            <Swiper
              onSwiper={(swiper: SwiperCore) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper: SwiperCore) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              modules={[Navigation, Scrollbar]} // Include Scrollbar module
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                300: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1.2,
                },
              }}
              scrollbar={{
                hide: false, // Keep the scrollbar visible
                draggable: true, // Make it draggable
                el: ".swiper-scrollbar",
              }}
            >
              {/* Swiper Slides */}
              <SwiperSlide style={{ minWidth: "1000px" }}>
                <img src={carouselImage1} />
              </SwiperSlide>
              <SwiperSlide style={{ minWidth: "1000px" }}>
                <img src={carouselImage2} />
              </SwiperSlide>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "4rem",
                  gap: "3rem",
                }}
              >
                {/* Navigation Buttons */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    onClick={() => swiperRef.current?.slidePrev()}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "transparent",

                      padding: "12px 32px 12px 32px",
                      border: "1px solid rgba(246, 247, 249, 1)",
                      borderRadius: "100px",
                    }}
                  >
                    <ArrowBackIcon
                      style={{
                        fontSize: "24px",
                        color: "#ffffff",
                      }}
                    />
                  </Button>

                  <Button
                    onClick={() => swiperRef.current?.slideNext()}
                    style={{
                      backgroundColor: "transparent",
                      padding: "12px 32px 12px 32px",
                      border: "1px solid rgba(246, 247, 249, 1)",
                      borderRadius: "100px",
                    }}
                  >
                    <ArrowForwardIcon
                      style={{
                        fontSize: "24px",
                        color: "#ffffff",
                      }}
                    />
                  </Button>
                </div>
                {/* Scrollbar (Automatically Generated by Swiper) */}
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <div
                    className="swiper-scrollbar"
                    style={{
                      position: "relative",
                      width: "100%",
                    }}
                  ></div>
                </div>
              </div>
            </Swiper>
          </div>
        </section>
        {/* Remaining Service Rows */}
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
          {/* Add more ServiceRows as needed */}
        </section>
        {/* Footer */}
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
