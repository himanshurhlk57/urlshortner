import React from "react";
import "./footer.css";
import logo from "../static/logo.png";
import linkedin from "../static/linkedin.png";
import facebook from "../static/facebook.png";
import twitter from "../static/twitter.png";
import github from "../static/github.png";
import instagram from "../static/instagram.png";

function Footer() {
  return (
    <div>
      <div className="footerWrapper">
        <div>
          <img className="footerLogo" src={logo} alt="logo" />
          short.ly
        </div>
        <h1 className="footerText">Developed with 💖 by himanshu</h1>
        <div className="socialMedia">
          <a
            href="https://www.linkedin.com/in/himanshu-gupta-018424178/"
            target="_blank"
            rel="noopener"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://github.com/himanshurhlk57"
            target="_blank"
            rel="noopener"
          >
            <img src={github} alt="github" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
