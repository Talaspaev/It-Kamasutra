import React from 'react';

import style from './getMessage.module.css';

const getItem = (props) => {
  const { items } = props;
  const listItems = items.map((elem, index) => <div key={index.toString()} className={style.item}>{elem}</div>);

  return (
    listItems
  );
};
export default getItem;
