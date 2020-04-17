import React from 'react';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/state';

import Dialogs from './dialogs';

const DialogsContainer = (props) => {
  const { dispatch } = props;

  const AddNewMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const ChangeNewMessage = (text) => {
    dispatch(updateMessageActionCreator(text));
  };

  return (
    <Dialogs AddNewMessage={AddNewMessage} ChangeNewMessage={ChangeNewMessage} state={props.state} />
  );
};

export default DialogsContainer;
