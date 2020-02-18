import React from 'react';

import { NavLink } from 'react-router-dom';
import route from '../../route';

import style from './nav.module.css';


const NavBar = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to={route.profile}>Profile</NavLink>
    </div>
    <div className={`${style.item} ${style.active}`}>
      <NavLink to={route.music}>Message</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={route.news}>News</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={route.music}>Music</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={route.settings}>Settings</NavLink>
    </div>
  </nav>
);

export default NavBar;
