import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './getPerson.module.css';

const GetPerson = (props) => {
  const { items, Path } = props;
  const itemsArray = Object.values(items);

  const sd = ({ id, name }) => (<div key={id}><NavLink to={`${Path.dialog}/${id}`} className={style.item}>{name}</NavLink></div>);
  const RouteItem = itemsArray.map(sd);

return (
    RouteItem
  );
};

export default GetPerson;
