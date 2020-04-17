import React from 'react';

import { addPostActionCreator, updatePostActionCreator } from '../../../redux/state';
import MyPosts from './myPosts';

const MyPostsContainer = (props) => {
  const { dispatch } = props.store;

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const handlerPost = (text) => {
    dispatch(updatePostActionCreator(text));
  };

  return (
    <MyPosts addPost={addPost} handlerPost={handlerPost} state={props.store.state} />
  );
};

export default MyPostsContainer;
