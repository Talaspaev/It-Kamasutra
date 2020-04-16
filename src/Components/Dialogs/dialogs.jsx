import React from 'react';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/state';
import { I18Y } from '../../constants';

import GetPerson from './GetPerson/getPerson';
import GetItem from './GetMessage/getMessage';

import style from './dialogs.module.css';


const Dialogs = (props) => {
  const { dispatch } = props;
  const { dialogsData } = props.state.dialogsPages;

  const onAddNewMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const onChangeNewMessage = (e) => {
    const text = e.target.value;
    dispatch(updateMessageActionCreator(text));
  };

  return (

    <div className={style.dialogs}>
      <div className={style.textAreaWrapper}>
        <textarea onChange={onChangeNewMessage} value={props.state.dialogsPages.newMessage} />
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
