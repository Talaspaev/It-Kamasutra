import React from 'react';

import I18Y from '../../core/constants';
import GetPerson from './GetPerson/getPerson';
import GetItem from './GetMessage/getMessage';

import style from './dialogs.module.css';

const dialogsData = [{ id: 1, name: 'Dymuch' }, { id: 2, name: 'Andrey' }, { id: 3, name: 'Natalya' }, { id: 4, name: 'Igor' }, { id: 5, name: 'Egor' }];
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
