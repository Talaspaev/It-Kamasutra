import React from 'react';
import { NavLink } from 'react-router-dom';


import ROUTES from '../../../constants';

import style from './getPerson.module.css';

const GetPerson = (props) => {
  const { items } = props;
  const itemsArray = Object.values(items);

  const errorFunc = () => {
    alert('The image could not be loaded.');
  };

  const sd = ({ id, name, src }) => (
    <div key={id} className={style.wrapper}>
      <div className={style.imgContainer}><img src={src} className={style.img} alt="alt" onError={errorFunc} /></div>
      <NavLink to={`${ROUTES.DIALOG}/${id}`} className={style.item}>{name}</NavLink>
    </div>
  );
  const RouteItem = itemsArray.map(sd);

  return (
    RouteItem
  );
};

export default GetPerson;
