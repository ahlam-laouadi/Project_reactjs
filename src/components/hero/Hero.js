import React from "react";
import Navbar from "../navbar/Navbar";
import pic from "../../assets/cover.png";
import logo1 from "../../assets/shopify.png";
import logo2 from "../../assets/nearpad.png";
import logo3 from "../../assets/bench.png";
import logo4 from "../../assets/forbes.png";
import logo5 from "../../assets/bumble.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="heroSection">
      <Navbar />
      <div className="heroContainer">
        {/* left side */}
        <div className="leftSide">
          <h4>Advanced Platform</h4>

          <h1>Take your team to the next level</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            eligendi provident
          </p>

          <button className="button heroBtn">About us</button>
        </div>

        {/* right side */}
        <img src={pic} alt="img" />
      </div>

      {/* the bottom brands */}
      <div className="brands">
        <section>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
        </section>
        <section>
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </section>

        <img src={logo5} alt="" />
      </div>
    </section>
  );
};

export default Hero;
