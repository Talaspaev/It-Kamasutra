import React from 'react';

import logo from './ProfileLogo.jpg';
import MyPosts from './MyPosts/myPosts';

import s from './profile.module.css'

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>ava+ description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
