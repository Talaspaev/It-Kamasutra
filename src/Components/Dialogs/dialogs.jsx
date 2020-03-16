import React from 'react';
import { NavLink } from 'react-router-dom';

import I18Y from '../../core/constants';
import GetItem from './GetMessage/getMessage';

import style from './dialogs.module.css';

const dialogsData = [{ id: 1, name: 'Dymuch' }, { id: 2, name: 'Andrey' }, { id: 3, name: 'Natalya' }, { id: 4, name: 'Igor' }, { id: 5, name: 'Egor' }];
const GetPerson = (props) => {
  const { numbers } = props;
  const listItems = Object.keys(numbers).map((elem) => <div><NavLink to={`/dialogs/${elem}`} className={style.item}>{numbers[elem].name}</NavLink></div>);
  return (
    listItems
  );
};
const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={style.dialogsItems}>
      <GetPerson numbers={dialogsData} />
    </div>
    <div className={style.dialogsMessage}>
      <GetItem numbers={I18Y.message} />
    </div>
  </div>
);

export default Dialogs;
