import React from "react";


function Card({ number, icon, title, description }) {
  return (
    <div className="card">
      
      {/* Step Number */}
      <div className="card-number">{number}</div>

      {/* Icon */}
      <div className="card-icon">
        {icon}
      </div>

      {/* Title */}
      <h3 className="card-title">{title}</h3>

      {/* Description */}
      <p className="card-desc">{description}</p>

    </div>
  );
}

export default Card;