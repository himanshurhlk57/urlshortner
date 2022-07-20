import React from "react";
import "./header.css";
import logo from "../static/logo.png";
function Header() {
  return (
    <div>
      <div className="headerWrapper">
        <div className="logoWrapper">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="logoText">short.ly</h1>
        </div>
        <div className="headerEnd">
          <h1 className="about">About</h1>
          <h1 className="contact">Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
