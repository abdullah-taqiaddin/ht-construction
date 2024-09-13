import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button } from "@chakra-ui/react";
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
          Witnessing Excellence
        </div>
        <div className="gallery-buttons-container">
          <Button leftIcon={<BathIcon />} className="gallery-button">
            Bathroom
          </Button>
          <Button leftIcon={<KIcon />} className="gallery-button">
            Kitchen
          </Button>
          <Button leftIcon={<ClostIcon />} className="gallery-button">
            Cabinet & Closets
          </Button>
          <Button leftIcon={<GateIcon />} className="gallery-button">
            Doors & Gates
          </Button>
          <Button leftIcon={<StairsIcon />} className="gallery-button">
            Rails & Stairs
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
