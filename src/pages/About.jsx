import React from "react";
import "../App.css";
import bg from "../assets/Hero1.png";

const About = () => {
  return (
    <section className="about-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="about-overlay">
        {/* HERO */}
        <div className="about-hero">
          <div className="about-left">
            <h1 className="heading">
              About <span>TripNivesh</span>
            </h1>

            <p className="subtext">
              Helping you <span>travel debt-free</span> and achieve your
              <span> dream vacation</span>.
            </p>
          </div>

          <div className="image-card"></div>
        </div>

        {/* STORY */}
        <div className="about-story">
          <div className="story-text">
            <h2 className="section-title">
               Our <span>Story</span>
            </h2>

            <p className="section-desc">
              TripNivesh helps you plan your trips in advance and save monthly
              so you can travel <span>without financial stress</span>.
            </p>
          </div>

          <div className="story-image"></div>
        </div>

        {/* GRID SECTION */}
        <div className="about-grid">
          {/* WHY CHOOSE */}
          <div className="about-card improved">
            <h3 className="card-title">
              Why <span>Choose</span> TripNivesh?
            </h3>

            <div className="feature-list">
              <div className="feature-item">
                <span></span>
                <p>No Debt Travel</p>
              </div>

              <div className="feature-item">
                <span></span>
                <p>Simple Monthly Saving</p>
              </div>

              <div className="feature-item">
                <span></span>
                <p>Transparent Planning</p>
              </div>
            </div>

            <button className="green-btn full">
              Start Saving for Your Trip →
            </button>
          </div>

          {/* CONTACT */}
          <div className="about-card contact">
            <h3 className="card-title">
               Reach <span>Us</span> Directly
            </h3>

            <div className="contact-box">
              <p>Email Us</p>
              <span>contact@tripnivesh.com</span>
            </div>

            <div className="contact-box">
              <p> Message Us</p>
              <span>+91 90000 00000</span>
            </div>

            <button className="green-btn full">Send Message →</button>

            <p className="small-text">We typically respond within 24 hours.</p>
          </div>
        </div>

        {/* FOUNDERS */}
        <div className="founders">
          <div className="avatars">
            <div className="avatar"></div>
            <div className="avatar"></div>
          </div>

          <h4>Rohit & Priya | Co-Founders</h4>
          <p>
            Got a question or just want to say hello? We'd love to hear from
            you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
