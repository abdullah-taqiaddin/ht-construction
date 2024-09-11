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

        {/* Nav Links will be hidden on small screens */}
        <nav className="nav-links">
          <ul>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Home
              </a>
            </li>
            <li>
              <a href="https://happy-sky-0f5904b1e.5.azurestaticapps.net">
                Services
              </a>{" "}
              <span>↓</span>
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
