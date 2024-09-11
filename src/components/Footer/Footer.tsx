import React from "react";
import Icn from "../../Assets/icons/MainLogo 1.svg";
import { Button } from "@chakra-ui/react";
import { ReactComponent as BtnIcon } from "../../Assets/icons/buttonIcon.svg";
import "./Footer.css"; // Add this to import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-title">Let's Talk About Your Project</div>
        <Button
          style={{
            backgroundColor: "#c4a24d",
            color: "#fff",
            border: "unset",
            borderRadius: "1.8rem",
            padding: "1.7rem 0.5rem 1.7rem 1.7rem",
          }}
          rightIcon={<BtnIcon />}
        >
          Schedule a Consultation
        </Button>
      </div>

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
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Home
              </a>
            </li>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Services
              </a>
            </li>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Gallery
              </a>
            </li>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Full House Renovation
              </a>
            </li>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Cabinet Craft Solutions
              </a>
            </li>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Custom Gate Creations
              </a>
            </li>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Fireplace Master Services
              </a>
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
