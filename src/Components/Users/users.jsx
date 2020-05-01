import React from 'react';

import { I18N } from '../../constants';
import usersArray from '../../usersArray';

import style from './users.module.css';

const users = (props) => {
  if (props.users.length === 0) {
    props.setUsers(usersArray);
  }
  const toggleButton = (followed, id) => (followed ? <button type="button" onClick={() => { props.unfollowUser(id); }}>{I18N.ENG.UNFOLLOW}</button>
    : <button type="button" onClick={() => { props.followUser(id); }}>{I18N.ENG.FOLLOW}</button>);

  const usersItem = ({
    id, photoUrl, followed, fullname, status, location,
  }) => (
    <div key={id} className={style.item}>
      <div>
        <img src={photoUrl} alt="" className={style.img} />
        {toggleButton(followed, id)}
      </div>
      <div>
        <div>
          {fullname}
          {status}
        </div>
        <div>
          {location.city}
          {location.Country}
        </div>
      </div>
    </div>
  );
  const usersContainer = props.users.map(usersItem);
  return (
    <div>
      {usersContainer}
    </div>

  );
};

export default users;
