import React from 'react';

import { I18Y, dialogsData } from '../../core/constants';
import GetPerson from './GetPerson/getPerson';
import GetItem from './GetMessage/getMessage';

import style from './dialogs.module.css';


const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={style.dialogsItems}>
      <GetPerson items={dialogsData} />
    </div>
    <div className={style.dialogsMessage}>
      <GetItem items={I18Y.message} />
    </div>
  </div>
);

export default Dialogs;
