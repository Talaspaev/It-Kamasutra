import { createStore, combineReducers } from 'redux';

import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

import ACTION_TYPES from '../actionTypes';
import actionCreator from '../actionCreator';

const reducers = combineReducers({
  dialogsPages: dialogsReducer,
  ProfilePages: profileReducer,
});
const store = createStore(reducers);

const addPostActionCreator = () => actionCreator(ACTION_TYPES.ADD_POST);
const updatePostActionCreator = (text) => actionCreator(ACTION_TYPES.UPDATE_POST, text);
const addMessageActionCreator = () => actionCreator(ACTION_TYPES.ADD_NEW_MESSAGE);
const updateMessageActionCreator = (text) => actionCreator(ACTION_TYPES.UPDATE_NEW_MESSAGE, text);

export {
  store, addPostActionCreator, updatePostActionCreator, addMessageActionCreator, updateMessageActionCreator,
};
