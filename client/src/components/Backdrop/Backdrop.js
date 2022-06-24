import React from "react";

import "./styles.css";

function Backdrop({ show, handleCloseSidebar }) {
  return (
    <div
      className="backdrop"
      style={show ? { display: "block" } : { display: "none" }}
      onClick={handleCloseSidebar}
    />
  );
}

export default Backdrop;
