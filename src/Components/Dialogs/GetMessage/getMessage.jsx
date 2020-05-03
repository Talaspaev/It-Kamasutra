import React from 'react';

import style from './getMessage.module.css';

const getItem = (props) => {
  const { items } = props;
  const itemsArray = Object.values(items);

  const sd = ({ message }, index) => (<div key={index} className={style.item}>{message}</div>);
  const RouteItem = itemsArray.map(sd);

  return (
    RouteItem
  );
};
export default getItem;
