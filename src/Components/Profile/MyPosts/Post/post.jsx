import React from 'react';

import style from './post.module.css';

import logo from './post.jpg';

const Post = (props) => {
  const { messages } = props;
  const g = Object.values(messages);

  const a = ({ id, like, message }) => (
    <div className={style.item} key={id}>
      <img src={logo} alt="logo" />
      <span>
        like:
        {like}
      </span>
      <p>{message}</p>
    </div>
  );
  const b = g.map(a);
  return (
    b
  );
};

export default Post;
