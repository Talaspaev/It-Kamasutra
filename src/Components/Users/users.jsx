/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import * as axios from 'axios';

import { I18N } from '../../constants';

import style from './users.module.css';

import defaultImg from '../Image/person.jpg';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    const onPageSelected = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    };
    const createSpans = () => (
      <div>
        {pages.map((p) => (
          <span
            className={this.props.currentPage === p && style.selected ? style.selected : style.defaultspan}
            onClick={() => { onPageSelected(p); }}
          >
            {p}
          </span>
        ))}
      </div>
    );

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
        {createSpans()}
        <div>{usersContainer}</div>
      </div>

    );
  }
}

export default Users;
