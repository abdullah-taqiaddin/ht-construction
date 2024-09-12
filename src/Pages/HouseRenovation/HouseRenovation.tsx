import React from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import HImage from "../../Assets/images/full-house.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const HouseRenovation = () => {
  return (
    <div>
      <Header />
      <PagesHeader title="Full House Renovation Services" imagePath={HImage} />
      <Footer />
    </div>
  );
};

export default HouseRenovation;
