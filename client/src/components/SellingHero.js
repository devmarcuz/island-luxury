import React from "react";
import "../css/SellingHero.css";
import ProductLister from "./ProductLister";

const SellingHero = () => {
  const productBool = true;

  return (
    <div className="selling-hero">
      <div className="content">
        <h1>SELLING PROPERTIES</h1>
        <p>
          As an aspiring seller, you can sell your properties on our listing website to potential buyers, agents and top{" "}
          <span>companies.</span>
        </p>

        <button>START SELLING</button>
      </div>
      <ProductLister bottom="24" productBool={productBool} />
    </div>
  );
};

export default SellingHero;
