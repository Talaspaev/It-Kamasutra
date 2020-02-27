import React from 'react';
import { NavLink } from 'react-router-dom';

import NavItem from './NavItem/navItem';

import style from './nav.module.css';

const NavBar = () => {
  const Items = Object.values(NavItem);
  const itemRoute = ({ id, path, name }) => (<div key={id} className={style.item}><NavLink to={path} activeClassName={style.active}>{name}</NavLink></div>);
  const NavItemWrap = Items.map(itemRoute);

  return (
    <nav className={style.nav}>
      {NavItemWrap}
    </nav>
  );
};

export default NavBar;
