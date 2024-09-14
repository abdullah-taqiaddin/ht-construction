import React, { useState } from "react";
import Icn from "../../Assets/icons/MainLogo 1.svg";
import { Button } from "@chakra-ui/react";
import { ReactComponent as BtnIcon } from "../../Assets/icons/buttonIcon.svg";
import "./Footer.css"; // Add this to import the CSS file
import { Link } from "react-router-dom";

const Footer = ({ addTop = true }: { addTop?: boolean }) => {
  // State to manage the visibility of the services list
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  // Toggle the services dropdown in the footer
  const toggleServicesDropdown = () => {
    setIsServicesExpanded((prevState) => !prevState);
  };

  return (
    <footer>
      {addTop && (
        <div className="footer-top">
          <div className="footer-title">Let's Talk About Your Project</div>
          <Link to="/contanctus">
            <Button
              style={{
                backgroundColor: "#c4a24d",
                color: "#fff",
                border: "none",
                borderRadius: "1.8rem",
                padding: "1.7rem 0.5rem 1.7rem 1.7rem",
                alignSelf: "start",
              }}
              className="sched-btn"
              rightIcon={<BtnIcon />}
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      )}

      <div className="footer-main">
        <div className="footer-logo-container">
          <img src={Icn} alt="HT Construction" />
          <p className="footer-description">
            HT Construction, your premier home transformation experts in Canada.
            Elevate your lifestyle with our cutting-edge designs and innovative
            solutions.
          </p>
        </div>

        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleServicesDropdown} style={{ cursor: "pointer" }}>
              Services ↓
            </li>
            {isServicesExpanded && (
              <ul
                className="expanded-services-list"
                style={{ paddingLeft: "1rem", listStyle: "none" }}
              >
                <li>
                  <Link to="/houserenovation">Full House Renovation</Link>
                </li>
                <li>
                  <Link to="/closetscabinates">Cabinet Craft Solutions</Link>
                </li>
                <li>
                  <Link to="/customgates">Custom Gate Creations</Link>
                </li>
                <li>
                  <Link to="/fireplaceservices">Fireplace Master Services</Link>
                </li>
                <li>
                  <Link to="/modernkitchenservices">
                    Modern Kitchen Services
                  </Link>
                </li>
              </ul>
            )}
            <li>
              <Link to="/gallerypage">Gallery</Link>
            </li>
            <li>
              <Link to="/contanctus">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/houserenovation">Full House Renovation</Link>
            </li>
            <li>
              <Link to="/closetscabinates">Cabinet Craft Solutions</Link>
            </li>
            <li>
              <Link to="/customgates">Custom Gate Creations</Link>
            </li>
            <li>
              <Link to="/fireplaceservices">Fireplace Master Services</Link>
            </li>
            <li>
              <Link to="/modernkitchenservices">Modern kitchen Services</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 HTConstruction inc. All rights reserved.</p>
        <p>Powered by Hash Solution</p>
      </div>
    </footer>
  );
};

export default Footer;
