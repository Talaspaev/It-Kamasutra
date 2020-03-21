import React from 'react';

import GetPerson from './GetPerson/getPerson';
import GetItem from './GetMessage/getMessage';

import { messagesData, dialogsData } from '../../core/constants';

import style from './dialogs.module.css';


const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={style.dialogsItems}>
      <GetPerson items={dialogsData} />
    </div>
    <div className={style.dialogsMessage}>
      <GetItem items={messagesData} />
    </div>
  </div>
);

export default Dialogs;
