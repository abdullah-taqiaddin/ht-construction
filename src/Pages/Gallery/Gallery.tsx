import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button } from "@chakra-ui/react"; // Use only the Button from Chakra UI
import { ReactComponent as BathIcon } from "../../Assets/icons/sinks-icn.svg";
import { ReactComponent as ClostIcon } from "../../Assets/icons/closes-icn.svg";
import { ReactComponent as GateIcon } from "../../Assets/icons/gate-creation-icn.svg";
import { ReactComponent as KIcon } from "../../Assets/icons/Component 1/Type9.svg";
import { ReactComponent as StairsIcon } from "../../Assets/icons/stairs-icn.svg";
import "./Gallery.css"; // Import the CSS file
import BathroomGallery from "../../components/Bathorrom/Bathroom";
import KitchenGallery from "../../components/DoorsGates/DoorsGates";
import CabinatesClostes from "../../components/CabinatesClostes/CabinatesClostes";
import DoorsGates from "../../components/DoorsGates/DoorsGates";

// Example gallery components

export const GalleryPage = () => {
  // State to track which gallery is selected, default is 'BathroomGallery'
  const [selectedGallery, setSelectedGallery] = useState("BathroomGallery");

  // Function to render the gallery content based on the selected gallery
  const renderGalleryContent = () => {
    switch (selectedGallery) {
      case "BathroomGallery":
        return <BathroomGallery />;
      case "KitchenGallery":
        return <KitchenGallery />;
      case "CabinetClosetsGallery":
        return <CabinatesClostes />;
      case "DoorsGates":
        return <DoorsGates />;
      // case "RailsStairsGallery":
      //   return <RailsStairsGallery />;
      default:
        return null;
    }
  };

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
          {/* Change buttons to update the selected gallery */}
          <Button
            leftIcon={<BathIcon />}
            className="gallery-button"
            onClick={() => setSelectedGallery("BathroomGallery")}
          >
            Bathroom Gallery
          </Button>
          <Button
            leftIcon={<KIcon />}
            className="gallery-button"
            onClick={() => setSelectedGallery("KitchenGallery")}
          >
            Kitchen Gallery
          </Button>
          <Button
            leftIcon={<ClostIcon />}
            className="gallery-button"
            onClick={() => setSelectedGallery("CabinetClosetsGallery")}
          >
            Cabinet & Closets
          </Button>
          <Button
            leftIcon={<GateIcon />}
            className="gallery-button"
            onClick={() => setSelectedGallery("DoorsGates")}
          >
            Doors & Gates
          </Button>
          <Button
            leftIcon={<StairsIcon />}
            className="gallery-button"
            onClick={() => setSelectedGallery("RailsStairsGallery")}
          >
            Rails & Stairs
          </Button>
        </div>
      </div>

      {/* Display the selected gallery content here */}
      <div className="gallery-content">{renderGalleryContent()}</div>

      <Footer />
    </div>
  );
};
