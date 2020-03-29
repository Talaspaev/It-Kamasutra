import React from 'react';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
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
        <Post messages={props.state} />
      </div>
    </div>
  );
};

export default MyPosts;
