import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/redux-state';

import Dialogs from './dialogs';

const mapStateToProps = (state) => ({
  dialogsPages: state.dialogsPages,
});
const mapDispatchToProps = (dispatch) => ({
  addNewMessage: () => {
    dispatch(addMessageActionCreator());
  },
  changeNewMessage: (text) => {
    dispatch(updateMessageActionCreator(text));
  },

});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
