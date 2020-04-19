import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/state';

import Dialogs from './dialogs';

const mapStateToProps = (state) => ({
  dialogsPages: state.dialogsPages,
});
const mapDispatchToProps = (dispatch) => ({
  AddNewMessage: () => {
    dispatch(addMessageActionCreator());
  },
  ChangeNewMessage: (text) => {
    dispatch(updateMessageActionCreator(text));
  },

});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
