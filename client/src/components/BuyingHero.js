import React from "react";
import "../css/BuyingHero.css";

const BuyingHero = () => {
  return (
    <div className="buying-hero">
      <div className="rw-1">
        <div className="content">
          <h1>BUYING PROPERTIES</h1>
          <p>
            As a buyer, you can meet credible and potential sellers of properties on our listing website ready to sell
            to you at good prices and scam free.
          </p>
          <button>START BUYING</button>
        </div>
      </div>
      <div className="rw-2">
        <div className="content">
          <h1>RENT/LEASE PROPERTIES</h1>
          <p>You can rent/lease out your property on a click to potential users on free property listing website</p>
          <button>RENT/LEASE</button>
        </div>
      </div>
      <img src="/images/rect.svg" alt="" />
    </div>
  );
};

export default BuyingHero;
