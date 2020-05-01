import ACTION_TYPES from '../actionTypes';

const initialState = {
  profileData: [
    {
      id: 1, like: 13, message: 'HI EE',
    },
    {
      id: 2, like: 11, message: 'whar are you doing',
    },
    {
      id: 3, like: 8, message: 'adipisicing elit. Officiis error',
    },
  ],
  textArea: 'Hi',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_POST: {
      const postData = {
        id: 0,
        like: 5,
        message: state.textArea,
      };
      const stateCopy = { ...state };
      stateCopy.profileData = [...state.profileData];
      stateCopy.profileData.unshift(postData);
      stateCopy.textArea = '';
      return stateCopy;
    }
    case ACTION_TYPES.UPDATE_POST: {
      const stateCopy = { ...state };
      stateCopy.textArea = action.payload;
      return stateCopy;
    }
    default: return state;
  }
};

export default profileReducer;
