import React from 'react';

import { actionCreater } from '../../redux/state';

import ACTION_TYPES from '../../actionTypes';
import GetPerson from './GetPerson/getPerson';
import GetItem from './GetMessage/getMessage';

import style from './dialogs.module.css';

const Dialogs = (props) => {
  const { dispatch } = props;
  const { dialogsData } = props.state.dialogsPages;

  const onAddNewMessage = () => {
    dispatch(actionCreater(ACTION_TYPES.ADD_NEW_MESSAGE, null));
  };

  const onChangeNewMessage = (e) => {
    const text = e.target.value;
    dispatch(actionCreater(ACTION_TYPES.UPDATE_NEW_MESSAGE, text));
  };

  return (

    <div className={style.dialogs}>
      <div className={style.textAreaWrapper}>
        <textarea onChange={onChangeNewMessage} value={props.state.dialogsPages.newMessage} />
        <button type="button" onClick={onAddNewMessage}>Button</button>
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
