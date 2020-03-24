import React from 'react';

import style from './header.module.css';

import logo from './headerLogo.svg';

const Header = () => (
  <div className={style.header}>
    <img src={logo} alt="logo" className="headerImg" />
  </div>
);

export default Header;
