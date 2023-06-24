import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import img from "../../assets/stevdy.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className={active ? "navbarContainer active" : "navbarContainer"}>
      <main className="mainNavbar">
        <img src={img} alt="" />

        <menu className="links">
          <h3>Browser</h3>
          <h3>Bootcamps</h3>
          <h3>How It Works</h3>
          <h3>Testimonial</h3>
        </menu>

        <GiHamburgerMenu
          className="menuIcon"
          onClick={() => setActive(!active)}
        />

        <button className=" button aboutRed">About us</button>
      </main>

      {/* the extended menu on smaller screens */}
      <menu className="menu">
        <h3>Browser</h3>
        <h3>Bootcamps</h3>
        <h3>How It Works</h3>
        <h3>Testimonial</h3>
      </menu>
    </nav>
  );
};

export default Navbar;
