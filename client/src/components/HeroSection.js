import "../css/HeroSection.css";
import { useState, useEffect } from "react";

function HeroSection() {
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    function playVideo() {
      document.querySelector("video").play();
    }
    let myVid = document.querySelector("video");
    myVid.oncanplay = playVideo();
  });

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };
  return (
    <div className="hero-container">
      <video src="/video/vid_bg.mp4" autoPlay loop muted />

      <div className="hero-flex">
        <div className="rg-content">
          <h1>
            MAKING PROPERTY
            <br /> LISTINGS EASIER <br /> AND MORE <br /> EFFICIENT
          </h1>

          <button>GET STARTED</button>
        </div>
        <div className="lf-content">
          <div className="search">
            <input
              type="search"
              name=""
              onChange={handleChange}
              placeholder="search for a seller buyer properties"
              id=""
            />
            <img src="/images/search.svg" alt="" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
