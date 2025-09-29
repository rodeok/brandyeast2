import React, { useState } from "react";
import "./HeroSection.css";
import Navlogo from '../Images/Navlogo.png'

const HeroSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="hero-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          {/* <img src="/brand.png" alt="logo" /> */}
          <img src={Navlogo} alt="" />
        </div>

        <ul className="nav-links">
          <li
            className="nav-item"
            onMouseEnter={() => toggleDropdown("company")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Company ▼
            {activeDropdown === "company" && (
              <div className="dropdown">
                <p>About Us</p>
                <p>Team</p>
                <p>Careers</p>
              </div>
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Services ▼
            {activeDropdown === "services" && (
              <div className="dropdown">
                <p>Branding</p>
                <p>Marketing</p>
                <p>Consulting</p>
              </div>
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => toggleDropdown("case")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Case Studies ▼
            {activeDropdown === "case" && (
              <div className="dropdown">
                <p>Projects</p>
                <p>Clients</p>
              </div>
            )}
          </li>

          <li className="nav-item">
            <a href="/insight">Insight</a>
          </li>
        </ul>

        <a href="/get-started" className="btn-dark">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <div className="hero-content">
        {/* <h1>
          What Is Life <br />Worth,  If A Legacy <br /> Isn’t Built?
        </h1> */}
        <h1 className="typing-text">
  What Is Life Worth,<br /> If A Legacy Isn’t Built?
</h1>

        <p>
          Welcome to BrandyEast, where branding becomes legacy. We don’t just
          build brands; we craft legacies.
        </p>
        <div className="hero-buttons">
          <a href="/solution" className="btn-green">
            Our Solution →
          </a>
          <a href="/portfolio" className="btn-outline">
            Portfolio →
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

