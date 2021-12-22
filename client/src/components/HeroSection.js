import "../css/HeroSection.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function HeroSection() {
  const [searchVal, setSearchVal] = useState("");

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
            {!searchVal && <FaSearch className="icon" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
