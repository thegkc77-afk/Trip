import React from "react";
import Mail from '../assets/Mail.png'

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrap">


        {/* Heading */}
        <div className="contact-header">
          <h1>Get in Touch With Us </h1>
          <p>
            We’re here to help you plan and save for your dream trip.
            Send us a message and we’ll reply right away!
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-container">

          {/* LEFT FORM */}
          <div className="contact-form">
            <h2>Send a Message</h2>

            <div className="row">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Manoj Kumar" />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="manoj@example.com" />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="How does the saving feature work?"
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="I'd love to know more about planning a trip..."
              ></textarea>
            </div>

            <button className="send-btn">Send Message</button>
          </div>

          {/* RIGHT INFO */}
          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="info-item">
              <div className="icon blue">{<img src={Mail} />}</div>
              <div>
                <p>Email Us</p>
                <h4>support@tripnivesh.com</h4>
              </div>
            </div>

            <div className="info-item">
              <div className="icon green">📞</div>
              <div>
                <p>Call Us</p>
                <h4>+91 78589 65675</h4>
              </div>
            </div>

            <div className="info-item">
              <div className="icon orange">📍</div>
              <div>
                <p>Location</p>
                <h4>Bhagalpur, Bihar, India</h4>
              </div>
            </div>

            <div className="info-item">
              <div className="icon purple">⏰</div>
              <div>
                <p>Working Hours</p>
                <h4>Mon - Fri: 9AM - 6PM</h4>
                <span>Weekend: Covered</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;