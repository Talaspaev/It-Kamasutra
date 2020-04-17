import React from 'react';

import ProfileInfo from './ProfileInfo/profileInfo';
import MyPostsContainer from './MyPosts/myPostsContainer';

const Profile = (props) => (
  <div>
    <ProfileInfo />
    <MyPostsContainer store={props} />
  </div>
);


export default Profile;
