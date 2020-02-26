import React from 'react';

import NavItemBlock from './NavItem/navMapFunc';
import NavItem from './NavItem/navItem';

import style from './nav.module.css';

const NavBar = () => {
  const Items = Object.values(NavItem);
  return (
    <nav className={style.nav}>
      <NavItemBlock context={Items} />
    </nav>
  );
};

export default NavBar;
