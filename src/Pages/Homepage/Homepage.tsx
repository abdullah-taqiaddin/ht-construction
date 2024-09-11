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
          alt="Service Icon"
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
        <section
          style={{
            display: "flex",
            alignItems: "center",
            padding: "80px 0",
            backgroundColor: "#F6F7F9",
            gap: "40px",
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
                fontSize: "120px",
                fontWeight: "bold",
                lineHeight: "1.2",
                marginBottom: "20px",
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
                border: "none",
                borderRadius: "1.8rem",
                padding: "1.7rem 0.5rem 1.7rem 1.7rem",
              }}
              rightIcon={<BtnIcon />}
            >
              Schedule a Consultation
            </Button>
          </div>

          {/* Right Image Section with Gradient Overlay */}
          <div
            style={{
              position: "relative",
              width: "60%",
              borderRadius: "20px",
              overflow: "hidden",
              marginTop: "-80px",
              marginRight: "-80px",
            }}
          >
            <img
              src={fireplaceImage}
              alt="Fireplace Services"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                display: "block",
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              }}
            ></div>

            {/* Text over the gradient */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                padding: "20px",
                color: "#fff",
                zIndex: "2",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    textAlign: "left",
                    fontWeight: "500",
                    fontSize: "35px",
                  }}
                >
                  FirePlace Services
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: "40px",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "400px",
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "rgba(246, 247, 249, 1)",
                      lineHeight: "24px",
                    }}
                  >
                    Our expert team is dedicated to creating inviting, cozy
                    spaces that center around the heart of your home - the
                    fireplace.
                  </div>

                  <div
                    style={{
                      maxWidth: "400px",
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "rgba(246, 247, 249, 1)",
                      lineHeight: "24px",
                    }}
                  >
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
              {/* Subtitle and Title */}
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

              {/* Swiper Carousel */}
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
