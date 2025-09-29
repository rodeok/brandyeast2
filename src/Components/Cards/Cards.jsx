import React from "react";
import "./Cards.css";

const cardsData = [
  {
    title: "Brand Protection",
    text: "We ensure your brand’s legacy is reflected in every product, package, and material with clear, consistent expressions across all touchpoints. Our Brand Protection services provide comprehensive support, from CAC registration to intellectual property management, safeguarding your brand’s future.",
    link: "#"
  },
  {
    title: "Brand Identity",
    text: "We don’t just build brands; we craft legacies. Our purpose-driven approach to branding is strategically designed to help your brand stand the test of time. Join us in creating a legacy that echoes for generations.",
    link: "#"
  },
  {
    title: "Brand Expression",
    text: "Every Touchpoint, Every Detail, Imprinted with Legacy. Your brand should speak clearly in every product, package, and material. We bring your brand to life across all relevant platforms and materials, ensuring that every expression is consistent and impactful.",
    link: "#"
  },
  {
    title: "Brand Management",
    text: "We specialize in building a lasting legacy through effective brand management, focusing on a strong digital presence across social media. Our approach includes empowering your team to embody and promote a growth mindset, fostering sustained brand impact.",
    link: "#"
  }
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <a href={card.link} className="btn">
            Learn More <span>&raquo;</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cards;
