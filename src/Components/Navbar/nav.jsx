import React from 'react';

import route from '../../route';

import style from './nav.module.css';

const NavBar = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <a href={route.profile}>Profile</a>
    </div>
    <div className={`${style.item} ${style.active}`}>
      <a href={route.music}>Message</a>
    </div>
    <div className={style.item}>
      <a href={route.news}>News</a>
    </div>
    <div className={style.item}>
      <a href={route.music}>Music</a>
    </div>
    <div className={style.item}>
      <a href={route.settings}>Settings</a>
    </div>
  </nav>
);

export default NavBar;
