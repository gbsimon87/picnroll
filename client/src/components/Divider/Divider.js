import React from "react";
import "./styles.css";

function Divider({ fullWidth = false }) {
  return (
    <div className={`divider ${fullWidth === true ? "" : "container"}`}>
      <div className="divider__first">Stay ahead of the game</div>
      <div className="divider__second">Join picNroll</div>
    </div>
  );
}

export default Divider;
