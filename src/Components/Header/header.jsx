import React from "react";

import s from './header.module.css';

import logo from "./headerLogo.jpg";

const Header = () => {
  return (
    <div className={s.header}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
