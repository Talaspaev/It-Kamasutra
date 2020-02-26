import React from 'react';

import I18Y from '../../core/constants';
import GetItem from './GetItems/getItem';

import style from './dialogs.module.css';

const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={style.dialogsItems}>
      <GetItem numbers={I18Y.name} />
    </div>
    <div className={style.dialogsMessage}>
      <GetItem numbers={I18Y.message} />
    </div>
  </div>
);

export default Dialogs;
