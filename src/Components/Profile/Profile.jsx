import React from 'react';

import MyPosts from './MyPosts/myPosts';
import ProfileInfo from './ProfileInfo/profileInfo';

const Profile = (props) => (
  <div>
    <ProfileInfo />
    <MyPosts props={props} />
  </div>
);

export default Profile;
