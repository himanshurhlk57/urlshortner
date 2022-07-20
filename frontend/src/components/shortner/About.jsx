import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="aboutWrapper">
        <div>
          <h1 className="aboutHeading">Why a shortened URL?</h1>
          <p className="aboutPara">
            Shorter URLs takes up much less space when compared to the orginal
            ones. Hence, it is easier to share shorter versions that the
            original ones
          </p>
        </div>
        <div className="line"></div>
        <div>
          <h1 className="aboutHeading">How to use short.ly?</h1>
          <p className="aboutPara">
            shortl.ly is super simple to use. Paste your long URLs, shorten it
            on a button click, copy it and share it anywhere, without having to
            worry about anuthing
          </p>
        </div>
        <div className="line"></div>
        <div>
          <h1 className="aboutHeading">Is short.ly free to use?</h1>
          <p className="aboutPara">
            Yes, the short.ly platform is completely free to use. You can
            shorten as many URLs as you want on our platform without thinking
            about anything.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
