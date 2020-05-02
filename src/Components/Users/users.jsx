/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import * as axios from 'axios';

import { I18N } from '../../constants';

import style from './users.module.css';

import defaultImg from '../Image/person.jpg';

class Users extends React.Component {
  state : {
    pages=[]
  }
  componentDidMount() {
    const {
      setUsers, setTotalUsersCount, currentPage, pageSize,
    } = this.props;

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(({ data }) => {
        const { items, totalCount } = data;
        setUsers(items);
        setTotalUsersCount(totalCount);
      });
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    const onPageSelected = (pageNumber) => {
      const {
        setUsers, setCurrentPage, pageSize,
      } = this.props;

      setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
        .then((data) => {
          const { items } = data;
          setUsers(items);
        });
    };
    const createSpans = () => {
      const { currentPage } = this.props;
      return (
        <div>
          {pages.map((p) => (
            <span
              className={currentPage === p && style.selected ? style.selected : style.defaultspan}
              onClick={() => { onPageSelected(p); }}
            >
              {p}
            </span>
          ))}
        </div>
      );
    };

    const toggleButton = (followed, id) => {
      const { followUser, unfollowUser } = this.props;
      return (followed ? <button type="button" onClick={() => { unfollowUser(id); }}>{I18N.ENG.UNFOLLOW}</button>
        : <button type="button" onClick={() => { followUser(id); }}>{I18N.ENG.FOLLOW}</button>);
    };

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
    const usersContainer = () => {
      const { users } = this.props;
      return users.map(usersItem);
    };

    return (
      <div>
        {createSpans()}
        <div>{usersContainer()}</div>
      </div>

    );
  }
}

export default Users;
