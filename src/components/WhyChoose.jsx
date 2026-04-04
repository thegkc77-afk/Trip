import React from "react";
import "../App.css";

const WhyChoose = () => {
  const points = [
    "No loans, no debt",
    "Simple monthly savings",
    "Track your progress easily",
    "Travel stress-free",
  ];

  return (
    <section className="why-section">
      <div className="why-container">

        {/* Left Content */}
        <div className="why-left">
          <h2>Why choose TripNivesh?</h2>

          <ul>
            {points.map((item, index) => (
              <li key={index}>
                <span className="check-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#22c55e" />
                    <path
                      d="M7 12l3 3 7-7"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="why-card">
          <h3>Plan your next trip today </h3>
          <p>Start saving now and make your dream journey a reality.</p>

          <button>Get Started</button>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;