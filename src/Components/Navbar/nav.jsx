import React from 'react';
import { NavLink } from 'react-router-dom';

import route from '../../route';

import style from './nav.module.css';

const NavBar = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to={route.profile} activeClassName={style.active}>Profile</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={route.dialogs} activeClassName={style.active}>Message</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={route.news} activeClassName={style.active}>News</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={route.music} activeClassName={style.active}>Music</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={route.settings} activeClassName={style.active}>Settings</NavLink>
    </div>
  </nav>
);

export default NavBar;
