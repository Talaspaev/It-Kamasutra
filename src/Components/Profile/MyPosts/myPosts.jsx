import React from 'react';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
  const { dispatch } = props.props;
  const refArea = React.createRef();

  const addPost = () => {
    dispatch({ type: 'ADD-POST' });
  };

  const handlerPost = () => {
    const text = refArea.current.value;
    dispatch({ type: 'UPDATE-POST', NewText: text });
  };

  return (
    <div>
      My posts
      <div />
      <textarea onChange={handlerPost} value={props.props.state.ProfilePages.textArea} ref={refArea} />
      <button onClick={addPost} type="button">Add post</button>
      <div className={style.posts}>
        <Post messages={props.props.state.ProfilePages} />
      </div>
    </div>
  );
};

export default MyPosts;
