import React from "react";
import "./Logos.css";
import Logo from '../Images/Logo.png'
import logo3 from '../Images/logo3.jpg'
import Logo2 from '../Images/Logo2.png'
import logo4 from '../Images/logo4.png'
import logo5 from '../Images/logo5.png'
import logo6 from '../Images/logo6.png'

const Logos = () => {
  return (
    <div className="logos-container">
      <div className="logo-card"><img src={logo3} alt="Logo 1" /></div>
      <div className="logo-card"><img src={Logo2} alt="Logo 2" /></div>
      <div className="logo-card"><img src={Logo} alt="Logo 3" /></div>
      <div className="logo-card"><img src={logo4} alt="Logo 4" /></div>
      <div className="logo-card"><img src={logo5} alt="Logo 5" /></div>
      <div className="logo-card"><img src={logo6} alt="Logo 6" /></div>
    </div>
  );
};

export default Logos;