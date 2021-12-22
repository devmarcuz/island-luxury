import React from "react";
import "../css/SignUpHero.css";

const SignUpHero = () => {
  return (
    <div className="signup-hero">
      {/* <img src="/images/illustration.svg" alt="" /> */}

      <div className="signup-hero-flex">
        <div className="rg-content">
          <p>
            The right place to list, sell or rent your properties to potential buyers or even as a buyer to buy from
            credible and trusted sellers.
          </p>

          <button>SIGN UP</button>
        </div>
        <div className="lf-content">
          <img src="/images/illustration.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUpHero;
