import React from 'react';
import * as axios from 'axios';

import { I18N } from '../../constants';

import style from './users.module.css';

const users = (props) => {
  const loadUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        props.setUsers(response.data.items);
      });
    }
  };
  const toggleButton = (followed, id) => (followed ? <button type="button" onClick={() => { props.unfollowUser(id); }}>{I18N.ENG.UNFOLLOW}</button>
    : <button type="button" onClick={() => { props.followUser(id); }}>{I18N.ENG.FOLLOW}</button>);

  const usersItem = ({
    id, photoUrl, followed, fullname, status,
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
      </div>
    </div>
  );
  const usersContainer = props.users.map(usersItem);
  return (
    <div>
      <button onClick={loadUsers}>Load</button>
      {usersContainer}
    </div>

  );
};

export default users;
