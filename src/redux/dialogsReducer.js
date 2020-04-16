import ACTION_TYPES from '../actionTypes';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_MESSAGE: {
      const messageData = {
        id: 5,
        name: 'Adil',
        message: state.newMessage,
        src: 'https://img.gazeta.ru/files3/784/11560784/skrskr2-pic905-895x505-4108.jpg',

      };
      state.dialogsData.push(messageData);
      state.newMessage = '';
      return state;
    }
    case ACTION_TYPES.UPDATE_NEW_MESSAGE: state.newMessage = action.payload;
      return state;
    default: return state;
  }
};
export default dialogsReducer;
