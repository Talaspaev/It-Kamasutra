import React from 'react';

import style from './nav.module.css';

const NavBar = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <a href="/profile">Profile</a>
    </div>
    <div className={`${style.item} ${style.active}`}>
      <a href="/dialogs">Message</a>
    </div>
    <div className={style.item}>
      <a href="/news">News</a>
    </div>
    <div className={style.item}>
      <a href="/music">Music</a>
    </div>
    <div className={style.item}>
      <a href="/settings">Settings</a>
    </div>
  </nav>
);

export default NavBar;
