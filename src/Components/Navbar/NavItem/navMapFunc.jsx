import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../nav.module.css';

const NavMapFunc = (props) => {
  const { context } = props;

  return (context.map((item) => (<div key={item.id} className={style.item}><NavLink to={item.path} activeClassName={style.active}>{item.name}</NavLink></div>)));
};
export default NavMapFunc;
