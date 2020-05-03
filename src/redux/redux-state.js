import { createStore, combineReducers } from 'redux';

import ACTION_TYPES from '../actionTypes';
import actionCreator from '../actionCreator';

import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  dialogsPages: dialogsReducer,
  profilePages: profileReducer,
  usersPages: usersReducer,
});

const store = createStore(reducers);

const addPostActionCreator = () => actionCreator(ACTION_TYPES.ADD_POST);
const updatePostActionCreator = (text) => actionCreator(ACTION_TYPES.UPDATE_POST, text);

const addMessageActionCreator = () => actionCreator(ACTION_TYPES.ADD_NEW_MESSAGE);
const updateMessageActionCreator = (text) => actionCreator(ACTION_TYPES.UPDATE_NEW_MESSAGE, text);

const followUserActionCreator = (userId) => actionCreator(ACTION_TYPES.FOLLOW, userId);
const unfollowUserActionCreator = (userId) => actionCreator(ACTION_TYPES.UNFOLLOW, userId);

const setUserActionCreator = (users) => actionCreator(ACTION_TYPES.SET_USERS, users);

const setCurrentPageCreator = (currentPage) => actionCreator(ACTION_TYPES.SET_CURRENT_PAGE, currentPage);
const setTotalUsersCountCreator = (totalUsersCount) => actionCreator(ACTION_TYPES.SET_TOTAL_USERS_COUNT, totalUsersCount);

export {
  store, addPostActionCreator, updatePostActionCreator, addMessageActionCreator, updateMessageActionCreator,
  followUserActionCreator, unfollowUserActionCreator, setUserActionCreator, setCurrentPageCreator, setTotalUsersCountCreator,
};
