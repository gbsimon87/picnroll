import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingBag2Line } from "react-icons/ri";

import NavigationDesktop from "../Navigation/NavigationDesktop";
import Input from "../Input/Input";

import "./styles.css";

export default function Header({ navIsOpen, setNavIsOpen, navDesktopData }) {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top__burger">
          <GiHamburgerMenu size={30} onClick={() => setNavIsOpen(!navIsOpen)} />
        </div>
        <div className="header__top__logo">
          <h2>PICnROLL</h2>
        </div>
        <div className="header__top__bag">
          <RiShoppingBag2Line size={30} />
        </div>
      </div>
      <div className="header__bottom">
        <Input hasMagnifyingGlass placeholder="New Advanced Search" />
      </div>
      <NavigationDesktop data={navDesktopData} />
    </header>
  );
}
