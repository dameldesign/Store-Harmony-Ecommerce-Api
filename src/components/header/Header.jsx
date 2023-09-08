import React from "react";
import LoGo from "../../assets/clipart150480.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>DamelMart</h1>
    </header>
  );
};

export default Header;
