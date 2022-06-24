import React from "react";
import "./styles.css";

function Banner({ text }) {
  return (
    <div className="banner">
      <h4>{text}</h4>
    </div>
  );
}

export default Banner;
