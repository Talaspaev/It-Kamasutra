import React from 'react';

import style from './post.module.css';

import logo from './post.jpg';

const Post = (props) => {
  const { profileData } = props.messages;
  const postArray = Object.values(profileData);

  const postFunc = ({ like, message }, index) => (
    <div className={style.item} key={index}>
      <img src={logo} alt="logo" />
      <span>
        like:
        {like}
      </span>
      <p>{message}</p>
    </div>
  );
  const postContent = postArray.map(postFunc);
  return (
    postContent
  );
};

export default Post;
