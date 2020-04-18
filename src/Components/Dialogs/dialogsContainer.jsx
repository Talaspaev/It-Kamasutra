import React from 'react';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/state';
import StoreConext from '../../storeContext';

import Dialogs from './dialogs';

const DialogsContainer = () => (
  <StoreConext.Consumer>
    {
      (store) => {
        const AddNewMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const ChangeNewMessage = (text) => {
          store.dispatch(updateMessageActionCreator(text));
        };

        return (
          <Dialogs AddNewMessage={AddNewMessage} ChangeNewMessage={ChangeNewMessage} state={store.getState().dialogsPages} />
        );
      }
    }
  </StoreConext.Consumer>
);

export default DialogsContainer;
