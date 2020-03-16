import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './getPerson.module.css';


const GetPerson = (props) => {
  const { numbers } = props;
  const listItems = Object.keys(numbers).map((elem) => <div><NavLink to={`/dialogs/${elem}`} className={style.item}>{numbers[elem].name}</NavLink></div>);
  return (
    listItems
  );
};
export default GetPerson;
