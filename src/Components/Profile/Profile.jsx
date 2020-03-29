import React from 'react';

import MyPosts from './MyPosts/myPosts';
import ProfileInfo from './ProfileInfo/profileInfo';

const Profile = (props) => {
  const { profileData } = props.state.ProfilePages;
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={profileData} />
    </div>
  );
};

export default Profile;
