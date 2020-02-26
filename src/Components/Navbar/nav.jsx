import React from 'react';
import { NavLink } from 'react-router-dom';

import NavItem from './NavItem/navItem';

import style from './nav.module.css';

const NavBar = () => {
  const Items = Object.values(NavItem);
  const NavItemBlock = Items.map((item) => (<div key={item.id} className={style.item}><NavLink to={item.path} activeClassName={style.active}>{item.name}</NavLink></div>));
  return (
    <nav className={style.nav}>
      {NavItemBlock}
    </nav>
  );
};

export default NavBar;
