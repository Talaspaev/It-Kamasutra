import React from 'react';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
  const { state } = props;
  return (
    <div>
      My posts
      <div />
      <textarea />
      <button type="button">Add post</button>
      <div className={style.posts}>
        <Post message={state.qus} />
        <Post message={state.ans} />
      </div>
    </div>
  );
};

export default MyPosts;
