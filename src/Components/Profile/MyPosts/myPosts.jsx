import React from 'react';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
  const textAreaFunc = props.props.Func;
  const createrrrr = React.createRef();

  const addPost = () => {
    const text = createrrrr.current.value;
    textAreaFunc(text);
    createrrrr.current.value = '';
  };
  return (
    <div>
      My posts
      <div />
      <textarea ref={createrrrr} />
      <button onClick={addPost} type="button">Add post</button>
      <div className={style.posts}>
        <Post messages={props.props.state.ProfilePages} />
      </div>
    </div>
  );
};

export default MyPosts;
