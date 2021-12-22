import React from "react";
import "../css/TopSellerHero.css";

const TopSellersHero = () => {
  const sellers = [1, 2, 3, 4, 5, 6];
  return (
    <div className="top-seller-hero">
      <button>SIGN UP</button>
      <div className="flex">
        <h2>Top Sellers</h2>

        <div className="sellers">
          {sellers.map((seller, index) => (
            <img src="/images/girl.jpg" key={index} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellersHero;
