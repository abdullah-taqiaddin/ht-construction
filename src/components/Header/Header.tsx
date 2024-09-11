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

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI Drawer control
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown state for services
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown to detect outside clicks

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent scrolling back to the top
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
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
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent style={{ background: "white", zIndex: 10000 }}>
            <DrawerCloseButton />
            <DrawerHeader>
              <div className="logo">
                <img src={Icn} alt="HT Construction" />
              </div>
            </DrawerHeader>
            <DrawerBody>
              <nav>
                <ul className="drawer-nav">
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
              </nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <div className="logo">
          <img src={Icn} alt="HT Construction" />
        </div>

        {/* Nav Links */}
        <nav className="nav-links">
          <ul>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Home
              </a>
            </li>
            <li onClick={toggleDropdown} style={{ position: "relative" }}>
              <a href="#">Services</a> <span>↓</span>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef} // Attach ref to dropdown
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                    listStyle: "none",
                    padding: "10px",
                    margin: 0,
                    zIndex: 1000,
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid grey",
                      }}
                    >
                      <a
                        href="https://happy-sky-0f5904b1e.5.azurestaticapps.net"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Full House Renovation
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid grey",
                      }}
                    >
                      <a
                        href="https://happy-sky-0f5904b1e.5.azurestaticapps.net"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Cabinet Craft Solutions
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid grey",
                      }}
                    >
                      <a
                        href="https://happy-sky-0f5904b1e.5.azurestaticapps.net"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Custom Gate Creations
                      </a>
                    </div>
                    <div
                      style={{
                        padding: "8px 0",
                      }}
                    >
                      <a
                        href="https://happy-sky-0f5904b1e.5.azurestaticapps.net"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        Fireplace Master Services
                      </a>
                    </div>
                  </ul>
                </div>
              )}
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
