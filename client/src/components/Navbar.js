import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    var lastScrollTop = 0;
    let navbar = document.querySelector(".nav");

    window.addEventListener("scroll", () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-11vh";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navbar.classList.add("nav-solid");
      } else {
        navbar.classList.remove("nav-solid");
      }
    });
  }, []);
  return (
    <div className="nav">
      <div className="toggle">
        <img src="/images/toggle.svg" alt="" />
      </div>

      <div className="logo">
        <img src="/images/island_logo.png" alt="" />
        <div className="empty"></div>
      </div>

      <ul>
        <li>
          <Link to="/">Buy</Link>
        </li>
        <li>
          <Link to="/">Sell</Link>
        </li>
        <li>
          <Link to="/">Rent</Link>
        </li>
        <li>
          <Link to="/">Contact us</Link>
        </li>
      </ul>

      <div className="btn">
        <button>SIGN UP</button>
      </div>

      <div className="display">
        <div className="empty"></div>
        <img src="/images/girl.jpg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
