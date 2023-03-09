import React from "react";
import "./PricingCard.css";

function PricingCard() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
