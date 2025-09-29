import React from "react";
import "./Footer.css";
import Navlogo from '../Images/Navlogo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <img src={Navlogo} alt="BrandyYeast Logo" />
        </div>

        {/* Contact Info */}
        <div className="footer-info">
          <div>
            <h4>Phone</h4>
            <p>+2349092933508</p>
          </div>
          <div>
            <h4>Facebook</h4>
            <p>@mybrandyeast</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>brandyeastinc@gmail.com</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2024 BrandyYeast Inc | All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Terms & condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Site credit</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;