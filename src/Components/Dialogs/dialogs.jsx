import React from 'react';

import style from './dialogs.module.css';
import I18Y from '../../Core/constants';

const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={style.dialogsItems}>
      <div className={style.dialog}>{I18Y.name[0]}</div>
      <div className={style.dialog}>{I18Y.name[1]}</div>
      <div className={style.dialog}>{I18Y.name[2]}</div>
      <div className={style.dialog}>{I18Y.name[3]}</div>
      <div className={style.dialog}>{I18Y.name[4]}</div>
    </div>
    <div className={style.dialogsMessage}>
      <div className={style.message}>{I18Y.message[0]}</div>
      <div className={style.message}>{I18Y.message[1]}</div>
      <div className={style.message}>{I18Y.message[2]}</div>
      <div className={style.message}>{I18Y.message[3]}</div>
      <div className={style.message}>{I18Y.message[4]}</div>
    </div>
  </div>
);

export default Dialogs;
