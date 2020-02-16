import React from 'react';

import s from './myPosts.module.css'

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>
          New posts
          <div className={s.posts}>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
          </div>
          <div></div>
        </div>
      </div>
  );
};

export default MyPosts;
