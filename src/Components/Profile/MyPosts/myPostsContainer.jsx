import React from 'react';

import { addPostActionCreator, updatePostActionCreator } from '../../../redux/state';
import StoreConext from '../../../storeContext';

import MyPosts from './myPosts';

const MyPostsContainer = () => (
  <StoreConext.Consumer>
    {
      (store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const handlerPost = (text) => {
          store.dispatch(updatePostActionCreator(text));
        };
        return (
          <MyPosts addPost={addPost} handlerPost={handlerPost} state={store.getState().ProfilePages} />
        );
      }
    }

  </StoreConext.Consumer>
);

export default MyPostsContainer;
