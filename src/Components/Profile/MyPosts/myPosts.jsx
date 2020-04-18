import React from 'react';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
  const { addPost, state, handlerPost } = props;
  const refArea = React.createRef();

  const addPostChange = () => {
    addPost();
  };

  const handlerPostChange = () => {
    const text = refArea.current.value;
    handlerPost(text);
  };

  return (
    <div>
      My posts
      <div />
      <textarea onChange={handlerPostChange} value={state.textArea} ref={refArea} />
      <button onClick={addPostChange} type="button">Add post</button>
      <div className={style.posts}>
        <Post messages={state} />
      </div>
    </div>
  );
};

export default MyPosts;
