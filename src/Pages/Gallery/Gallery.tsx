import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button } from "@chakra-ui/react"; // Use only the Button from Chakra UI
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ReactComponent as BathIcon } from "../../Assets/icons/sinks-icn.svg";
import { ReactComponent as ClostIcon } from "../../Assets/icons/closes-icn.svg";
import { ReactComponent as GateIcon } from "../../Assets/icons/gate-creation-icn.svg";
import { ReactComponent as KIcon } from "../../Assets/icons/Component 1/Type9.svg";
import { ReactComponent as StairsIcon } from "../../Assets/icons/stairs-icn.svg";
import "./Gallery.css"; // Import the CSS file

export const GalleryPage = () => {
  return (
    <div className="gallery-container">
      <Header />
      <div className="gallery-buttons-wrapper">
        <div className="gallery-header">
          HT Construction <span className="gallery-highlight">Gallery:</span>
          <br />
          Witnessing Excellence
        </div>
        <div className="gallery-buttons-container">
          <Link to="/BathroomGallery">
            <Button leftIcon={<BathIcon />} className="gallery-button">
              Bathroom Gallery
            </Button>
          </Link>
          <Link to="/KitchenGallery">
            <Button leftIcon={<KIcon />} className="gallery-button">
              Kitchen Gallery
            </Button>
          </Link>
          <Link to="/CabinetClosetsGallery">
            <Button leftIcon={<ClostIcon />} className="gallery-button">
              Cabinet & Closets
            </Button>
          </Link>
          <Link to="/DoorsGatesGallery">
            <Button leftIcon={<GateIcon />} className="gallery-button">
              Doors & Gates
            </Button>
          </Link>
          <Link to="/RailsStairsGallery">
            <Button leftIcon={<StairsIcon />} className="gallery-button">
              Rails & Stairs
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
