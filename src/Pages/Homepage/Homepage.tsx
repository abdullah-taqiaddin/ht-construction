import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperCore } from "swiper"; // Import SwiperCore type for explicit typing
import { useRef, useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

// In your Homepage component:
const Homepage = () => {
  const swiperRef = useRef<SwiperCore | null>(null); // Explicitly type swiperRef
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="homepage">
      {/* Other code */}

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
              Step into a world of exceptional craftsmanship and transformative
              design with HT Construction, your premier partner for
              comprehensive home renovations in Canada. Our expertise extends
              across a spectrum of services, ensuring every aspect of your home
              reflects your unique style and functional needs.
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#717D96",
            padding: "2rem",
            paddingLeft: "7rem",
          }}
        >
          <Swiper
            onSwiper={(swiper: SwiperCore) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper: SwiperCore) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#999",
                  height: "300px",
                  borderRadius: "20px",
                }}
              >
                HELLO
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#666",
                  height: "300px",
                  borderRadius: "20px",
                }}
              >
                HI
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#666",
                  height: "300px",
                  borderRadius: "20px",
                }}
              >
                HI
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#666",
                  height: "300px",
                  borderRadius: "20px",
                }}
              >
                HI
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#666",
                  height: "300px",
                  borderRadius: "20px",
                }}
              >
                HI
              </div>
            </SwiperSlide>
          </Swiper>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1rem",
            }}
          >
            <Button
              onClick={() => swiperRef.current?.slidePrev()}
              style={{
                marginRight: "10px",
                backgroundColor: "transparent",
              }}
            >
              <ArrowBackIcon
                style={{
                  fontSize: "24px",
                  color: isBeginning ? "#c4a24d" : "#ffffff",
                }}
              />
            </Button>

            <Button
              onClick={() => swiperRef.current?.slideNext()}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <ArrowForwardIcon
                style={{
                  fontSize: "24px",
                  color: isEnd ? "#c4a24d" : "#ffffff",
                }}
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
