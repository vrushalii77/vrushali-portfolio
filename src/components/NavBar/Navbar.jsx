import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="main-logo">
        <img src="./vrushlogo2.png" alt="logo" className="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Links */}
      <div className={`main-links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link className="nav-links" to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link className="nav-links" to="/aboutme" onClick={toggleMenu}>
          About
        </Link>
        <Link className="nav-links" to="/project" onClick={toggleMenu}>
          Projects
        </Link>
        <Link className="nav-links" to="/resume" onClick={toggleMenu}>
          Resume
        </Link>
      </div>

      <div className="main-contact">
        <Link
          to="/contact"
          onClick={toggleMenu}
          className="contact-button-link"
        >
          <button className="contact-btn">
            <img src="./contact.png" alt="Contact me" className="contact-img" />
            Contact Me
          </button>
        </Link>

        {/* <button className="desktoMenuBtn">
            <img src="./contact.png" alt="Contact me" className="contact-img" />
            Contact Me
          </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
