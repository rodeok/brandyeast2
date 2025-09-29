import React from "react";
import "./TestimonialV2.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Engr. Chimaobi Samuel",
    role: "Founder, Hisico Builders",
    text:
      "Brandyeast didn’t just give us a logo — they built a brand that represents strength, structure, and legacy. Their understanding of construction branding has helped position builders with both trust and recognition.",
  },
  {
    name: "Michèle Aka",
    role: "Founder, Bien Être Foundation",
    text:
      "Brandyeast helped us communicate care and compassion through visuals that were striking. They created branding that speaks to love, resilience, and trust — we are forever grateful.",
  },
  {
    name: "Joy Michael",
    role: "Founder, Nehvora",
    text:
      "Brandyeast helped us discover the soul of our brand. From positioning to design, every step was intentional. Nehvora stands today as a brand that empowers and inspires.",
  },
];

export default function TestimonialV2() {
  return (
    <section className="testimonials-v2">
      <h2 className="testimonials-v2__title">What our customers says</h2>

      <div className="testimonials-v2__grid">
        {testimonials.map((t, i) => (
          <div className="testimonials-v2__item" key={i}>
            {/* decorative purple/blue blob behind */}
            <div className={`testimonials-v2__blob blob--${i + 1}`} />

            {/* white card */}
            <div className="testimonials-v2__card">
              <h3 className="testimonials-v2__name">{t.name}</h3>

              <FaQuoteLeft className="testimonials-v2__quote" />

              <p className="testimonials-v2__text">{t.text}</p>

              <div className="testimonials-v2__role">{t.role}</div>
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
}
