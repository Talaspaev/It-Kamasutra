import React from 'react';

import s from './post.module.css';

import logo from "./post.jpg";

const Post = () => {
    return (
        <div className={s.item}>
            <img src={logo} alt="logo" /> post 1</div>
    );
};

export default Post;
