import React from 'react';

import style from './post.module.css';

import logo from './post.jpg';

const Post = (props) => {
  const { message } = props;
  return (
    <div className={style.item}>
      <img src={logo} alt="logo" />
      {message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
