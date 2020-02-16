import React from 'react';

import Post from './Post/post'

import s from './myPosts.module.css';

const MyPosts = () => {
  return (
      <div>
        My posts
        <div></div>
        <textarea></textarea>
        <button>Add post</button>
          <div className={s.posts}>
           <Post/>
          </div>
          
        </div>
     
  );
};

export default MyPosts;
