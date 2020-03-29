import React from 'react';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
  const { updateTextaAreaFunc, textAreaFunc } = props.props;
  const createRefFortext = React.createRef();
  const addPost = () => {
    const text = createRefFortext.current.value;
    textAreaFunc(text);
    updateTextaAreaFunc('');
  };
  const handlerPost = () => {
    const text = createRefFortext.current.value;
    updateTextaAreaFunc(text);
  };
  return (
    <div>
      My posts
      <div />
      <textarea onChange={handlerPost} value={props.props.state.ProfilePages.textArea} ref={createRefFortext} />
      <button onClick={addPost} type="button">Add post</button>
      <div className={style.posts}>
        <Post messages={props.props.state.ProfilePages} />
      </div>
    </div>
  );
};

export default MyPosts;
