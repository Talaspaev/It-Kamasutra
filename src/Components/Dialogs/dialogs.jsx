import React from 'react';

import style from './dialogs.module.css';
import I18Y from '../../Core/constants';

const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={style.dialogsItems}>
      <div className={style.item}>{I18Y.name[0]}</div>
      <div className={style.item}>{I18Y.name[1]}</div>
      <div className={style.item}>{I18Y.name[2]}</div>
      <div className={style.item}>{I18Y.name[3]}</div>
      <div className={style.item}>{I18Y.name[4]}</div>
    </div>

  </div>
);

export default Dialogs;
