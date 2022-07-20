import React from "react";
import "./body.css";
import vector from "../static/vector.png";

function Body() {                         
  return (
    <div>
      <div className="bodyWrapper">
        <div className="subBody">
          <h1 className="headingg">Shorter Links,</h1>
          <h1 className="subHeading">Better Results</h1>
          <p className="para">
            A URL shortner built with powerful tools to help you grow your brand
            beyond maximum
          </p>
          <button className="shortenButton">Shorten URL</button>
        </div>
        <div>
          <img className="vectorImg" src={vector} alt="vectorImage" />
        </div>
      </div>
    </div>
  );
}

export default Body;
