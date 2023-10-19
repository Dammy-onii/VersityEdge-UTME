import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/Main Logo.svg";

import "./nav.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <nav className="navContainer">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="navLinks">
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <NavLink to="/">
              <li>
                <h3>Home</h3>
              </li>
            </NavLink>

            <NavLink to="/About">
              <li>
                <h3>About Us</h3>
              </li>
            </NavLink>

            <NavLink to="/PartnerWith">
              <li>
                <h3>Partner with Us</h3>
              </li>
            </NavLink>

            <NavLink to="/Scholarship">
              <li>
                <h3>Scholarships</h3>
              </li>
            </NavLink>

            <NavLink to="/">
              <li>
                <h3>Contact Us</h3>
              </li>
            </NavLink>
          </ul>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
