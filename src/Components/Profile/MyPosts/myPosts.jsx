import React from 'react';

import { addPostActionCreator, updatePostActionCreator } from '../../../redux/state';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
  const { dispatch } = props.props;
  const refArea = React.createRef();

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const handlerPost = () => {
    const text = refArea.current.value;
    dispatch(updatePostActionCreator(text));
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
