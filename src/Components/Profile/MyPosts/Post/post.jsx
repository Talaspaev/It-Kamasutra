import React from 'react';

import style from './post.module.css';

import logo from './post.jpg';

const Post = (props) => (
  <div className={style.item}>
    <img src={logo} alt="logo" />
    {props.message}
    <div>
      <span>like</span>
    </div>
  </div>
);

export default Post;
