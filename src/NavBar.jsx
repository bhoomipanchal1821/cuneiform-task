import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <div class="navbar">
        <h3 className="nav_logo">Slite</h3>
        <div className="nav_link">
        <a href="#home">Product</a>
        <a href="#about">Template</a>
        <a href="#services">Pricing</a>
        <a href="#contact">Blog</a>
        <a href="#contact">Sign in</a>
        <div className="main_button">
        <button className="request_demo">Request Demo</button>
        <button className="start_free">Start for free</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
