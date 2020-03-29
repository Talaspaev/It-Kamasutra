import React from 'react';

import style from './post.module.css';

import logo from './post.jpg';

const Post = (props) => {
  const { profileData } = props.messages;
  const PostData = Object.values(profileData);

  const PostFunc = ({ id, like, message }) => (
    <div className={style.item} key={`${id}`}>
      <img src={logo} alt="logo" />
      <span>
        like:
        {like}
      </span>
      <p>{message}</p>
    </div>
  );
  const PostContent = PostData.map(PostFunc);
  return (
    PostContent
  );
};

export default Post;
