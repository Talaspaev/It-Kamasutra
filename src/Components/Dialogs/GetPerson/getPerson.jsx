import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './getPerson.module.css';

const GetPerson = (props) => {
  const { items } = props;
  const listItems = Object.keys(items).map((elem) => <div><NavLink to={`/dialogs/${elem}`} className={style.item}>{items[elem].name}</NavLink></div>);

  return (
    listItems
  );
};

export default GetPerson;
