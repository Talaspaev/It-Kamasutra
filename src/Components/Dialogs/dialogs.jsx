import React from 'react';

import GetPerson from './GetPerson/getPerson';
import GetItem from './GetMessage/getMessage';

import style from './dialogs.module.css';


const Dialogs = (props) => {
  const { dialogsData, messagesData } = props.state;
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <GetPerson items={dialogsData} />
      </div>
      <div className={style.dialogsMessage}>
        <GetItem items={messagesData} />
      </div>
    </div>
  );
};

export default Dialogs;
