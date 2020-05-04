/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { I18N } from '../../constants';

import style from './users.module.css';

import defaultImg from '../Image/person.jpg';

const users = (props) => {
  const {
    currentPage, onPageSelected, pages, followUser, unfollowUser,
  } = props;

  const createSpan = (p, index) => (
    <span
      key={index}
      role="button"
      tabIndex="0"
      className={currentPage === p && style.selected ? style.selected : style.defaultspan}
      onClick={() => { onPageSelected(p); }}
    >
      {p}
    </span>
  );

  const createSpans = () => (
    <div>
      {pages.map(createSpan)}
    </div>
  );

  const toggleButton = (followed, id) => (followed ? <button type="button" onClick={() => { unfollowUser(id); }}>{I18N.ENG.UNFOLLOW}</button>
    : <button type="button" onClick={() => { followUser(id); }}>{I18N.ENG.FOLLOW}</button>);

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

  const usersContainer = () => props.users.map(usersItem);

  return (
    <div>
      {createSpans()}
      <div>{usersContainer()}</div>
    </div>

  );
};

export default users;
