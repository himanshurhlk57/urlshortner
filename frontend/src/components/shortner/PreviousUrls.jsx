import React from "react";
import "./previous.css";
import copy from "../static/copy.png";
function PreviousUrls() {
  return (
    <div>
      <h1 className="previousHeading">Previous URLs</h1>
      <div className="previousWrapper">
        <p className="previousUrls">
          https://careers.twitter.com/en/work-for-twitter/202203/ceaaa81e-f829-4bf3...
        </p>
        <p className="previousUrls">https://short.ly/3tHV2Ny</p>
        <button className="copyBtn">
          <img src={copy} alt="copySvg" /> Copy
        </button>
      </div>
    </div>
  );
}

export default PreviousUrls;
