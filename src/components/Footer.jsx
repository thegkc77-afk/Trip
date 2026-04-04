import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="logo">
            <svg width="28" height="28" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#4F8CFF" />
              <path
                d="M7 13C9 9 15 9 17 13"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <span>TripNivesh</span>
          </div>

          <p>
            Save smart. Travel stress-free.  
            Your dream trips made achievable.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">How It Works</a>
          <a href="#">Savings Goals</a>
          <a href="#">About</a>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Connect</h4>

          <div className="icons">
            {/* Twitter */}
            <svg viewBox="0 0 24 24">
              <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1C18 4.5 17 4 16 4c-2 0-3.5 1.8-3 3.7-3-.1-5.7-1.6-7.5-3.8-.9 1.5-.4 3.4 1.1 4.3-.6 0-1.2-.2-1.7-.5 0 1.8 1.2 3.3 2.9 3.6-.5.1-1 .2-1.5.1.4 1.4 1.7 2.4 3.2 2.4-1.4 1.1-3.2 1.7-5 1.5C5.8 19 7.9 20 10.2 20c6 0 9.4-5 9.2-9.4.6-.5 1.3-1.2 1.6-1.8z"/>
            </svg>

            {/* Instagram */}
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17" cy="7" r="1.5"/>
            </svg>

            {/* LinkedIn */}
            <svg viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="3"/>
              <path d="M7 10v7M7 7v.01M11 10v7m0-4c0-2 3-2 3 0v4m4-7v7"/>
            </svg>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 TripNivesh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;