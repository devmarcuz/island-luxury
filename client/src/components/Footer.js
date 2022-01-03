import React from "react";
import "../css/Footer.css";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <p>The all-in-one website to sell, rent and lease your properties</p>
        <div className="hr" />
      </div>
      <div className="lower">
        <div className="details">
          <p>COMPANY</p>
          <p>ABOUT</p>
          <p>ADDRESS</p>
          <p>APPLY FOR JOB</p>
          <p>CONTACT US</p>
        </div>
        <div className="details">
          <p>MEDIA</p>
          <p>INSTAGRAM</p>
          <p>EMAIL</p>
          <p>TWITTER</p>
          <p>FACEBOOK</p>
        </div>
        <div className="details">
          <p>SERVICES</p>
          <p>BUY</p>
          <p>SELL</p>
          <p>RENT/LEASE</p>
        </div>
      </div>

      <Link to="/" className="logo">
        <img src="/images/island_logo.svg" alt="" />

        <p>
          <FaCopyright style={{ marginRight: "2px" }} />
          2021
        </p>
      </Link>
    </div>
  );
};

export default Footer;
