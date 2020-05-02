/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import * as axios from "axios";

import { I18N } from "../../constants";

import style from "./users.module.css";

import defaultImg from "../Image/person.jpg";

class Users extends React.Component {
  state = {
    pages: [],
  };

  componentDidMount() {
    const { currentPage, pageSize, setUsers, setTotalUsersCount } = this.props;

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then(({ data }) => {
        const { items, totalCount } = data;

        setUsers(items);
        setTotalUsersCount(totalCount);
        this.getPages();
      });
  }

  getPages = () => {
    const pages = [];
    for (let i = 1; i <= this.pagesCount(); i++) {
      pages.push(i);
    }

    this.setState({ pages });
  };

  onPageSelected = (pageNumber) => {
    const { setCurrentPage, pageSize, setUsers } = this.props;

    setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`
      )
      .then(({ data }) => {
        const { items } = data;

        setUsers(items);
      });
  };

  createSpans = () => (
    <div>
      {this.state.pages.map((p ,index) => (
        <span
          key={index}
          className={
            this.props.currentPage === p && style.selected
              ? style.selected
              : style.defaultspan
          }
          onClick={() => {
            this.onPageSelected(p);
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );

  toggleButton = (followed, id) => {
    const { unfollowUser, followUser } = this.props;

    return followed ? (
      <button type="button" onClick={() => unfollowUser(id)}>
        {I18N.ENG.UNFOLLOW}
      </button>
    ) : (
      <button type="button" onClick={() => followUser(id)}>
        {I18N.ENG.FOLLOW}
      </button>
    );
  };

  usersItem = ({ id, photos, followed, name, status }) => (
    <div key={id} className={style.item}>
      <div>
        <img
          src={photos.small !== null ? photos.small : defaultImg}
          alt=""
          className={style.img}
        />
        {this.toggleButton(followed, id)}
      </div>
      <div>
        <div>
          {name}
          {status}
        </div>
      </div>
    </div>
  );

  pagesCount = () => {
    const { totalUsersCount, pageSize } = this.props;

    return Math.ceil(totalUsersCount / pageSize);
  };

  usersContainer = () => this.props.users.map(this.usersItem);

  render() {
    return (
      <div>
        {this.createSpans()}
        <div>{this.usersContainer()}</div>
      </div>
    );
  }
}

export default Users;
