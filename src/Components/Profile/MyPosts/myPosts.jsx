import React from 'react';

import ACTION_TYPES from '../../../actionTypes';
import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
  const { dispatch } = props.props;
  const refArea = React.createRef();

  const addPost = () => {
    const action = { type: ACTION_TYPES.ADD_POST };
    dispatch(action);
  };

  const handlerPost = () => {
    const text = refArea.current.value;
    const action = { type: ACTION_TYPES.UPDATE_POST, NewText: text };
    dispatch(action);
  };

  return (
    <div>
      My posts
      <div />
      <textarea onChange={handlerPost} value={props.props.state.ProfilePages.textArea} ref={refArea} />
      <button onClick={addPost} type="button">Add post</button>
      <div className={style.posts}>
        <Post messages={props.props.state.ProfilePages} />
      </div>
    </div>
  );
};

export default MyPosts;
