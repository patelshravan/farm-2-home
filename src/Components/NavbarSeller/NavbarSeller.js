import React, { useState } from "react";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import LogoutIcon from "@mui/icons-material/Logout";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

import "./NavbarSeller.css";

const NavbarSeller = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>F</span>arm
            <span>2</span>Home
            <h2>Seller</h2>
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/homeSeller">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profileSeller">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/viewItems">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://twitter.com/meshravanpatel" target="_shravan">
                <FaTwitterSquare className="twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_meshravanpatel/"
                target="_shravan"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/patel-shravan/"
                target="_shravan"
              >
                <FaLinkedin className="Linkedin" />
              </a>
            </li>
            <li>
              <NavLink to="/signin" className="Logout">
                {<LogoutIcon fontSize="large" />}
              </NavLink>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarSeller;
