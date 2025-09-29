import React, { useState } from "react";
import "./FaqSection.css";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "What is Brandyeast, and what makes it different from other branding agencies?",
    a: "Brandyeast is a full-service branding agency that focuses on building legacies, not just brands. We provide holistic branding solutions tailored to businesses, events, and organizations.",
  },
  {
    q: "What does it mean to build a legacy through branding?",
    a: "It means creating lasting value, recognition, and impact through your brand that goes beyond immediate results.",
  },
  {
    q: "How does Brandyeast help with CAC registration and brand protection?",
    a: "We assist businesses with CAC registration, trademarking, and other forms of legal brand protection to secure your identity.",
  },
  {
    q: "What types of items can Brandyeast print and produce?",
    a: "From business cards and brochures to merchandise, event branding materials, and product packaging.",
  },
  {
    q: "How long does a typical branding project take?",
    a: "Timelines vary, but most branding projects take 4–8 weeks depending on complexity and scope.",
  },
  {
    q: "How does Brandyeast measure the success of a branding project?",
    a: "Through impact, recognition, customer engagement, and how well the brand delivers long-term value.",
  },
  {
    q: "Does Brandyeast work with clients outside Nigeria?",
    a: "Yes, we collaborate with both local and international clients across multiple industries.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq__title">Frequently Asked Questions (FAQ)</h2>
      <div className="faq__list">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq__item ${openIndex === i ? "open" : ""}`}
            onClick={() => toggleFaq(i)}
          >
            <div className="faq__question">
              <span>{item.q}</span>
              <FaChevronDown className={`faq__icon ${openIndex === i ? "rotated" : ""}`} />
            </div>
            {openIndex === i && <p className="faq__answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
