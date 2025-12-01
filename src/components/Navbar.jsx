import React, { useState } from "react";
import logo from "../assets/theplaco-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="logo">
          <img
            src={logo}
            alt="TheplaCo - Freshly Served"
            className="logo-img"
          />
        </a>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#menu" onClick={handleNavClick}>
            Menu
          </a>
          <a href="#about" onClick={handleNavClick}>
            About Us
          </a>
          <a href="#locations" onClick={handleNavClick}>
            Locations
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
          <a href="#contact" className="nav-cta" onClick={handleNavClick}>
            Send us a message
          </a>
        </nav>

        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
