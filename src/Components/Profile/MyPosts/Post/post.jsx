import React from 'react';

import s from './post.module.css';

import logo from "./post.jpg";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={logo} alt="logo" /> {props.message}
           <div>  <span>like</span></div>
            </div>
    );
};

export default Post;
