import React from "react";
import Input from "../Input/Input";

import "./styles.css";

function Sidebar({ navIsOpen, navItems }) {
  return (
    <div className={`sidebar ${navIsOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="sidebar__input">
        <Input hasMagnifyingGlass placeholder="Search.." />
      </div>
      <div className="nav-items">
        {navItems.map((navItem) => (
          <li
            key={navItem.id}
            className={navItem.isFirstLevel ? "nav-item-first-level" : ""}
          >
            <a href={navItem.link}>{navItem.text}</a>
            {navItem.isFirstLevel && <span>{">"}</span>}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
