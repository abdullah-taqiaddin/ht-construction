import React from "react";
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

  return (
    <>
      <header className="header">
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay // Ensure overlay is on top of other content
          />
          <DrawerContent style={{ background: "white", zIndex: 10000 }}>
            <DrawerCloseButton />
            <DrawerHeader>
              {" "}
              <div className="logo">
                <img src={Icn} alt="HT Construction" />
              </div>
            </DrawerHeader>
            <DrawerBody>
              <nav>
                <ul className="drawer-nav">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <div className="logo">
          <img src={Icn} alt="HT Construction" />
        </div>

        {/* Nav Links will be hidden on small screens */}
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a> <span>↓</span>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Hamburger icon will only show on small screens */}
        <div className="hamburger" onClick={onOpen}>
          <HamburgerIcon />
        </div>

        {/* Drawer for mobile view */}
      </header>
    </>
  );
};

export default Header;
