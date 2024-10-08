import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import HouseRenovation from "./Pages/HouseRenovation/HouseRenovation";
import ClosetsCabinates from "./Pages/ClosetsCabinates/ClosetsCabinates";
import CustomGates from "./Pages/CustomGates/CustomGates";
import FireplaceServices from "./Pages/FireplaceServices/ClosetsCabinates";
import ModernKitchenServices from "./Pages/ModernKitchen/ModernKitchen";
import { GalleryPage } from "./Pages/Gallery/Gallery";
import ContactForm from "./Pages/ContactUs/ContactForm";
import BathroomGallery from "./components/Bathorrom/Bathroom";
import KitchenGallery from "./components/KitchenGallery/KitchenGallery";
import CabinatesClostes from "./components/CabinatesClostes/CabinatesClostes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DoorsGates from "./components/DoorsGates/DoorsGates";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [pathname]); // Whenever the route/pathname changes

  return null;
};
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/houserenovation" element={<HouseRenovation />} />
          <Route path="/closetscabinates" element={<ClosetsCabinates />} />
          <Route path="/customgates" element={<CustomGates />} />
          <Route path="/fireplaceservices" element={<FireplaceServices />} />
          <Route
            path="/modernkitchenservices"
            element={<ModernKitchenServices />}
          />{" "}
          <Route path="/gallerypage" element={<GalleryPage />} />
          <Route path="/contanctus" element={<ContactForm />} />
          <Route path="/BathroomGallery" element={<BathroomGallery />} />
          <Route path="/KitchenGallery" element={<KitchenGallery />} />
          <Route path="/CabinatesClostes" element={<CabinatesClostes />} />
          <Route path="/DoorsGates" element={<DoorsGates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
