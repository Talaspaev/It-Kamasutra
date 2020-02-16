import React from 'react';

import logo from './ProfileLogo.jpg';

import MyPosts from './MyPosts/myPosts';

const Profile = () => (
  <div>
    <div>
      <img src={logo} alt="logo" />
    </div>
    <div>ava+ description</div>
    <MyPosts />
  </div>
);

export default Profile;
