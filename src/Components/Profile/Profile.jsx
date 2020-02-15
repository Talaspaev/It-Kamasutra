import React from "react";
import logo from "./2222.jpg";
const Profile = () => {
  return (
    <div className='profile'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>ava+ description</div>
      <div>
        My posts
        <div>
          New posts
          <div>
            <div>post 1</div>
            <div>post 1</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
