import React from 'react';

import Post from './Post/post';

import I18Y from '../../../Core/constants';

import style from './myPosts.module.css';

const MyPosts = () => (
  <div>
    My posts
    <div />
    <textarea />
    <button type="button">Add post</button>
    <div className={style.posts}>
      <Post message={I18Y.qus} />
      <Post message={I18Y.ans} />
    </div>
  </div>
);

export default MyPosts;
