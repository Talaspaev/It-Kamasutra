import React from 'react';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = () => (
  <div>
    My posts
    <div />
    <textarea />
    <button type="button">Add post</button>
    <div className={style.posts}>
      <Post message="Hi,How are you?" />
      <Post message="I am good" />
    </div>

  </div>

);

export default MyPosts;
