import React from 'react';

import Post from './Post/post';

import style from './myPosts.module.css';

const MyPosts = (props) => {
  const { areaFunc, updateArea } = props.props;
  const refArea = React.createRef();

  const addPost = () => {
    areaFunc();
  };

  const handlerPost = () => {
    const text = refArea.current.value;
    updateArea(text);
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
