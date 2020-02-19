import React from 'react';

import style from './dialogs.module.css';
import I18Y from '../../core/constants';
import GetItem from './GetItems/getItem';

const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={style.dialogsItems}>
      <GetItem nambers={I18Y.name} />
    </div>
    <div className={style.dialogsMessage}>
      <GetItem nambers={I18Y.message} />
    </div>
  </div>
);

export default Dialogs;
