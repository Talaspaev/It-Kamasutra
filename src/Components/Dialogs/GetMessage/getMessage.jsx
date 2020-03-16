import React from 'react';

import style from './getMessage.module.css';

const getItem = (props) => {
  const { numbers } = props;
  const listItems = numbers.map((elem, index) => <div key={index.toString()} className={style.item}>{elem}</div>);
  return (
    listItems
  );
};
export default getItem;
