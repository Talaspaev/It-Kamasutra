import React from 'react';

import Post from './Post/post';

import I18Y from '../../../constants';

import style from './myPosts.module.css';

const MyPosts = () => {
  const createrrrr = React.createRef();
  const addPost = () => {
    const text = createrrrr.current.value;
    alert(text);
  };
  return (
    <div>
      My posts
      <div />
      <textarea ref={createrrrr} />
      <button onClick={addPost} type="button">Add post</button>
      <div className={style.posts}>
        <Post message={I18Y.qus} />
        <Post message={I18Y.ans} />
      </div>
    </div>
  );
};

export default MyPosts;
