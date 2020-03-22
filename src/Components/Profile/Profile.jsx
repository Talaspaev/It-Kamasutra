import React from 'react';

import MyPosts from './MyPosts/myPosts';
import ProfileInfo from './ProfileInfo/profileInfo';

const Profile = (props) => {
  const { I18Y } = props.state;
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={I18Y} />
    </div>
  );
};

export default Profile;
