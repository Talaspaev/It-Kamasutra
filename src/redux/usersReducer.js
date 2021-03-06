import ACTION_TYPES from '../actionTypes';

const initailState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 100,
  currentPage: 15,
};

const usersReducer = (state = initailState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: true };
          }
          return u;
        }),
      }; }
    case ACTION_TYPES.UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: false };
          }
          return u;
        }),
      }; }
    case ACTION_TYPES.SET_USERS: {
      const stateCopy = { ...state, users: action.payload };
      return stateCopy;
    }
    case ACTION_TYPES.SET_CURRENT_PAGE: {
      const stateCopy = { ...state, currentPage: action.payload };
      return stateCopy;
    }
    case ACTION_TYPES.SET_TOTAL_USERS_COUNT: {
      const stateCopy = { ...state, totalUsersCount: action.payload };
      return stateCopy;
    }
    default: return state;
  }
};

export default usersReducer;
