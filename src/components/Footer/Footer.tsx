import React from "react";
import Icn from "../../Assets/icons/MainLogo 1.svg";
import { Button } from "@chakra-ui/react";
import { ReactComponent as BtnIcon } from "../../Assets/icons/buttonIcon.svg";
const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: "Public Sans",
          background: "white",
          paddingTop: "116px",
          paddingBottom: "116px",
          padding: "120px 350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "100px",
            letterSpacing: "0.07rem",
          }}
        >
          Let's Talk About Your Project
        </div>
        <Button
          style={{
            backgroundColor: "#c4a24d",
            color: "#fff",
            border: "unset",
            borderRadius: "1.8rem",
            padding: "1.7rem",
            paddingRight: "0.5rem",
          }}
          rightIcon={<BtnIcon />}
        >
          Schedule a Consultation{" "}
        </Button>
      </div>
      <div
        style={{
          padding: "116px",
          backgroundColor: "#191F28",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "300px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img src={Icn} alt="HT Construction" />
          </div>
          <p style={{ fontSize: "14px", lineHeight: "1.5", textAlign: "left" }}>
            HT Construction, your premier home transformation experts in Canada.
            Elevate your lifestyle with our cutting-edge designs and innovative
            solutions.
          </p>
        </div>

        <div style={{ textAlign: "left" }}>
          <h4
            style={{ color: "#666666", fontSize: "16px", marginBottom: "10px" }}
          >
            Useful Links
          </h4>
          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
            <li>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div style={{ textAlign: "left" }}>
          <h4
            style={{ color: "#666666", fontSize: "16px", marginBottom: "10px" }}
          >
            Services
          </h4>
          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
            <li>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Full House Renovation
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Cabinet Craft Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Custom Gate Creations
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Fireplace Master Services
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "320px",
          fontSize: "12px",
          backgroundColor: "rgb(25, 31, 40)",
          color: "white",
          padding: "116px",
          paddingTop: "unset",
          paddingBottom: "0.5rem",
        }}
      >
        <p style={{ color: "#717780", fontSize: "15px" }}>
          © 2024 HTConstruction inc. All rights reserved.
        </p>
        <p style={{ fontSize: "15px" }}>Powered by Hash Solution</p>
      </div>
    </footer>
  );
};

export default Footer;
