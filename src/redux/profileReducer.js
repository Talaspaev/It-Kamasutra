import ACTION_TYPES from '../actionTypes';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_POST: {
      const postData = {
        id: 0,
        like: 5,
        message: state.textArea,
      };
      state.profileData.push(postData);
      state.textArea = '';
      return state;
    }
    case ACTION_TYPES.UPDATE_POST: {
      state.textArea = action.payload;
      return state;
    }
    default: return state;
  }
};
export default profileReducer;
