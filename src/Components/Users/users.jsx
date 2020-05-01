import React from 'react';
import * as axios from 'axios';

import { I18N } from '../../constants';

import style from './users.module.css';

import defaultImg from '../Image/person.jpg';

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    const toggleButton = (followed, id) => (followed ? <button type="button" onClick={() => { this.props.unfollowUser(id); }}>{I18N.ENG.UNFOLLOW}</button>
      : <button type="button" onClick={() => { this.props.followUser(id); }}>{I18N.ENG.FOLLOW}</button>);

    const usersItem = ({
      id, photos, followed, name, status,
    }) => (
      <div key={id} className={style.item}>
        <div>
          <img src={photos.small !== null ? photos.small : defaultImg} alt="" className={style.img} />
          {toggleButton(followed, id)}
        </div>
        <div>
          <div>
            {name}
            {status}
          </div>
        </div>
      </div>
    );
    const usersContainer = this.props.users.map(usersItem);
    return (
      <div>
        {usersContainer}
      </div>

    );
  }
}

export default Users;
