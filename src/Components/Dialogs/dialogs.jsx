import React from 'react';

import { I18Y } from '../../constants';

import GetPerson from './GetPerson/getPerson';
import GetItem from './GetMessage/getMessage';

import style from './dialogs.module.css';


const Dialogs = (props) => {
  debugger;
  const { dialogsPages, AddNewMessage, ChangeNewMessage } = props;
  const { dialogsData } = dialogsPages;

  const onAddNewMessage = () => {
    AddNewMessage();
  };

  const onChangeNewMessage = (e) => {
    const text = e.target.value;
    ChangeNewMessage(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.textAreaWrapper}>
        <textarea onChange={onChangeNewMessage} value={dialogsPages.newMessage} />
        <button type="button" onClick={onAddNewMessage}>{I18Y.btn}</button>
      </div>
      <div className={style.dialogsItems}>
        <GetPerson items={dialogsData} />
      </div>
      <div className={style.dialogsMessage}>
        <GetItem items={dialogsData} />
      </div>
    </div>
  );
};

export default Dialogs;
