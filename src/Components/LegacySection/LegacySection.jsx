import React from "react";
import "./LegacySection.css";
import { FaShieldAlt, FaIdBadge, FaRegSmile, FaCogs, FaArrowRight } from "react-icons/fa";

const LegacySection = () => {
  return (
    <section className="legacy-section">
      {/* Left Content */}
      <div className="legacy-section-text">
        <h1>Building Legacies, Not Just Brands</h1>
        <p>
          At Brandyeast, we believe in branding with an endpoint in mind:
          legacy. We’re a full-service branding agency dedicated to helping
          businesses and organizations create brands with lasting value and
          impact. Our approach is holistic, encompassing not just business and
          corporate branding but also city and territorial branding, event
          branding (like statement weddings), and product branding.
        </p>
        <div className="legacy-section-buttons">
          <a href="/about" className="legacy-btn legacy-btn-green">
            More About Us <FaArrowRight className="icon" />
          </a>
          <a href="/contact" className="legacy-btn legacy-btn-outline">
            Book A Call <FaArrowRight className="icon" />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="legacy-section-cards">
        <div className="legacy-card">
          <FaShieldAlt className="legacy-card-icon" />
          <span>Brand Protection</span>
        </div>
        <div className="legacy-card">
          <FaIdBadge className="legacy-card-icon" />
          <span>Brand Identity</span>
        </div>
        <div className="legacy-card">
          <FaRegSmile className="legacy-card-icon" />
          <span>Brand Expression</span>
        </div>
        <div className="legacy-card">
          <FaCogs className="legacy-card-icon" />
          <span>Brand Management</span>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;


