import React from 'react';

import s from './profile.module.css'

import logo from './ProfileLogo.jpg';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>ava+ description</div>
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
    </div>
  );
};

export default Profile;
