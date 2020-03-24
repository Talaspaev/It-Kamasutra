import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './getPerson.module.css';

const GetPerson = (props) => {
  const { items, Path } = props;
  const itemsArray = Object.values(items);

  const sd = ({ id, name, src }) => (
    <div key={id} className={style.wrapper}>
      <div className={style.imgContainer}><img src={src} className={style.img} alt="alt" onError="this.onerror=null;" /></div>
      <NavLink to={`${Path.dialog}/${id}`} className={style.item}>{name}</NavLink>
    </div>
  );
  const RouteItem = itemsArray.map(sd);

  return (
    RouteItem
  );
};

export default GetPerson;
