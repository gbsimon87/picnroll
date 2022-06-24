import React from "react";
import { RiSearch2Line } from "react-icons/ri";

import "./styles.css";

function Input({ hasMagnifyingGlass, placeholder }) {
  return (
    <>
      <div className="user-input">
        <input type="text" placeholder={placeholder} />
      </div>
      {hasMagnifyingGlass && (
        <div className="user-search">
          <RiSearch2Line />
        </div>
      )}
    </>
  );
}

export default Input;
