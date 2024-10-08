import React, { useState, useEffect, useRef } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import Icn from "../../Assets/icons/MainLogo 1.svg";
import "./Header.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI Drawer control
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown state for services in the main navigation
  const [isDrawerDropdownOpen, setDrawerDropdownOpen] = useState(false); // Dropdown state for services in the drawer
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown to detect outside clicks

  const toggleDrawerDropdown = () => {
    setDrawerDropdownOpen((prev) => !prev); // Toggle dropdown visibility inside the drawer
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, [isDropdownOpen]);

  return (
    <>
      <header className="header">
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent style={{ background: "white", zIndex: 10000 }}>
            <DrawerCloseButton style={{ background: "#c4a24d" }} />
            <DrawerHeader>
              <div className="logo">
                <img
                  src={Icn}
                  alt="HT Construction"
                  style={{ height: "unset" }}
                />
              </div>
            </DrawerHeader>
            <DrawerBody>
              <nav>
                <ul className="drawer-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    onClick={toggleDrawerDropdown}
                    style={{ cursor: "pointer" }}
                  >
                    Services ↓
                  </li>
                  {isDrawerDropdownOpen && (
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: "1.5rem",
                        marginTop: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <li>
                        <Link
                          to="/houserenovation"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          Full House Renovation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/closetscabinates"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          Cabinet Craft Solutions
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/customgates"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          Custom Gate Creations
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/fireplaceservices"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          Fireplace Master Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/modernkitchenservices"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
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
              </nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <div className="logo">
          <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
            <img src={Icn} alt="HT Construction 2" />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ position: "relative" }}
            >
              <div>
                Services
                {/* Arrow that rotates */}
                <span className={`arrow ${isDropdownOpen ? "rotate" : ""}`}>
                  ↓
                </span>
              </div>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef} // Attach ref to dropdown
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                    listStyle: "none",
                    padding: "3rem",
                    paddingLeft: "2rem",
                    margin: 0,
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div className="dropdown-item" style={{ width: "12rem" }}>
                      <Link
                        to="/houserenovation"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Full House Renovation
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link
                        to="/closetscabinates"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Cabinet Craft Solutions
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link
                        to="/customgates"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Custom Gate Creations
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link
                        to="/fireplaceservices"
                        style={{
                          color: "#333",
                          textDecoration: "none",
                        }}
                      >
                        Fireplace Master Services
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link
                        to="/modernkitchenservices"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Modern Kitchen Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/gallerypage">Gallery</Link>
            </li>
            <li>
              <Link to="/contanctus">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden-div"></div>

        {/* Hamburger icon for small screens */}
        <div className="hamburger" onClick={onOpen}>
          <HamburgerIcon />
        </div>
      </header>
    </>
  );
};

export default Header;
