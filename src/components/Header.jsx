import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <svg width="28" height="28" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#4F8CFF" />
          </svg>
          <span>TripNivesh</span>
        </div>

        {/* Desktop Nav */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" className="nav-item">How It Works</NavLink>
          <NavLink to="/goals" className="nav-item">Savings Goals</NavLink>
          <NavLink to="/about" className="nav-item">About Us</NavLink>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* CTA */}
        <button className="signin-btn">Sign in</button>
      </div>
    </header>
  );
};

export default Header;