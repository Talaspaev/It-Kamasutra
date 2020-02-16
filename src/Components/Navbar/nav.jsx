import React from "react";

import s from './nav.module.css'

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href='/dialogs'>Message</a>
      </div>
      <div className={s.item}>
        <a href='/news'>News</a>
      </div>
      <div className={s.item}>
        <a href='/music'>Music</a>
      </div>
      <div className={s.item}>
        <a href='/settings'>Settings</a>
      </div>
    </nav>
  );
};

export default NavBar;
