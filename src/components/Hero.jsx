import React from "react";
import "../App.css";
import bgImage from "../assets/Hero1.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-container">

          {/* Left Content */}
          <div className="hero-left">
            <h1>Save monthly for your dream trip</h1>
            <p>
              Plan your trip, set your goal, and save step by step —
              stress-free travel without loans.
            </p>

            <button className="primary-btn">
              Start Saving Now
            </button>
          </div>

          {/* Right Card */}
          <div className="hero-card">
            <h3>Goa Trip</h3>
            <p className="goal">Total Goal ₹20,000</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <p className="saved">Saved ₹8,000 (40%)</p>

            <button className="card-btn">
              Start Saving →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;