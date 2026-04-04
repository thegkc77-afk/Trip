import React from "react";

const DestinationCard = ({ title, price, monthly, image, highlight }) => {
  return (
    <div className="destination-card">

      <img src={image} alt={title} className="card-img" />

      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">₹ {price}</p>
        <p className="monthly">Save ₹{monthly}/month</p>

        <button className={`card-btn ${highlight ? "blue" : ""}`}>
          Start Saving →
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;