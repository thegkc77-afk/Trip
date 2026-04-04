import React from "react";
import "../App.css";

const StepsSection = () => {
  const steps = [
    {
      title: "Choose your trip",
      desc: "Pick your dream destination",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="12" rx="2" fill="#4F8CFF" />
          <path d="M3 10h18" stroke="white" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Set your saving goal",
      desc: "Example: Goa Trip ₹20,000",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#22c55e" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="10"
            fill="white"
          >
            ₹
          </text>
        </svg>
      ),
    },
    {
      title: "Save monthly",
      desc: "Save small amounts every month",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24">
          <polygon
            points="2,16 22,8 13,22 11,13"
            fill="#f97316"
          />
        </svg>
      ),
    },
    {
      title: "Travel stress free",
      desc: "No loans. No tension.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24">
          <rect x="4" y="6" width="16" height="12" rx="3" fill="#6366f1" />
          <circle cx="9" cy="12" r="2" fill="white" />
          <circle cx="15" cy="12" r="2" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <>
    <section className="steps-section">
      <h2>Start small. Travel big.</h2>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
    
    </>
    
  );
};

export default StepsSection;