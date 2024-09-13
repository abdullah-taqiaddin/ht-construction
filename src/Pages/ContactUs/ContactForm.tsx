import React from "react";
import "./ContactForm.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Button } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <div style={{ background: "rgba(246, 247, 249, 1)" }}>
      <Header />
      <div className="consultation-container">
        <div className="left-section">
          <h1 className="left-section-text">Schedule a Consultation</h1>
          <div className="contact-info">
            <p style={{ fontSize: "18px", fontWeight: "700" }}>
              Contact information
            </p>
            <p>Email: htconstruction.inc2020@gmail.com</p>
            <p>Phone: 416-833-4242</p>
          </div>
        </div>

        <div className="right-section"></div>
        <div className="form-overlay">
          <form>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  color: "rgba(113, 119, 128, 1)",
                }}
              >
                <label
                  htmlFor="name"
                  style={{
                    fontWeight: "300",
                    marginBottom: "5px",
                    color: "rgba(113, 119, 128, 1)",
                  }}
                >
                  Name
                </label>
                <input type="text" id="name" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  color: "rgba(113, 119, 128, 1)",
                }}
              >
                <label
                  htmlFor="email"
                  style={{
                    fontWeight: "300",
                    marginBottom: "5px",
                    color: "rgba(113, 119, 128, 1)",
                  }}
                >
                  Email
                </label>
                <input type="email" id="email" />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "15px",
                color: "rgba(113, 119, 128, 1)",
              }}
            >
              <label
                htmlFor="phone"
                style={{
                  fontWeight: "300",
                  marginBottom: "5px",
                  color: "rgba(113, 119, 128, 1)",
                }}
              >
                Phone Number
              </label>
              <input type="tel" id="phone" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "15px",
                color: "rgba(113, 119, 128, 1)",
              }}
            >
              <label
                htmlFor="message"
                style={{
                  fontWeight: "300",
                  marginBottom: "5px",
                  color: "rgba(113, 119, 128, 1)",
                }}
              >
                Message
              </label>
              <textarea id="message" style={{ resize: "unset" }}></textarea>
            </div>

            <Button
              style={{
                background: "rgba(199, 149, 26, 1)",
                alignSelf: "start",
                color: "white",
                borderRadius: "50px",
                marginTop: "20px",
              }}
            >
              Submit and Send
            </Button>
          </form>
        </div>
      </div>
      <Footer addTop={false} />
    </div>
  );
};

export default ContactForm;
