import React from 'react';

import { newTextActionCreator } from '../../redux/state';
import ACTION_TYPES from '../../actionTypes';
import { I18Y } from '../../constants';

import GetPerson from './GetPerson/getPerson';
import GetItem from './GetMessage/getMessage';

import style from './dialogs.module.css';


const Dialogs = (props) => {
  const { dispatch } = props;
  const { dialogsData } = props.state.dialogsPages;

  const onAddNewMessage = () => {
    dispatch(newTextActionCreator(ACTION_TYPES.ADD_NEW_MESSAGE, null));
  };

  const onChangeNewMessage = (e) => {
    const text = e.target.value;
    dispatch(newTextActionCreator(ACTION_TYPES.UPDATE_NEW_MESSAGE, text));
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
