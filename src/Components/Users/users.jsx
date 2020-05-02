import React from 'react';
import * as axios from 'axios';

import { I18N, API } from '../../constants';

import style from './users.module.css';

import defaultImg from '../Image/person.jpg';

class Users extends React.Component {
  state = {
    pages: [],
  };
  componentDidMount() {
    const {
      setUsers, setTotalUsersCount, currentPage, pageSize,
    } = this.props;

    axios.get(`${API.BASE_URL}${API.USER_RESOURCE}${API.PAGE}${currentPage}${API.COUNT}${pageSize}`)
      .then(({ data }) => {
        const { items, totalCount } = data;
        setUsers(items);
        setTotalUsersCount(totalCount);
        this.createInitialPagesInState();
      });
  }

  createInitialPagesInState = () => {
    const pages = [];
    for (let i = 1; i <= this.pagesCount(); i++) {
      pages.push(i);
    }
    this.setState({ pages })
  }

  onPageSelected = (pageNumber) => {
    const { setUsers, setCurrentPage, pageSize, } = this.props;

    setCurrentPage(pageNumber);
    axios.get(`${API.BASE_URL}${API.USER_RESOURCE}${API.PAGE}${pageNumber}${API.COUNT}${pageSize}`)
      .then(({data}) => {
        const { items } = data;
        setUsers(items);
      });
  };

  createSpan=(p,index) =>{
    const { currentPage } = this.props;
    return(
    
      <span key={index}
        className={currentPage === p && style.selected ? style.selected : style.defaultspan}
        onClick={() => { this.onPageSelected(p); }}
      >
        {p}
      </span>
    );
  } 

  createSpans = () => {
    const {pages}=this.state;
    return (
      <div>
        {pages.map(this.createSpan)}
      </div>
    );
  };

  toggleButton = (followed, id) => {
    const { followUser, unfollowUser } = this.props;

    return (followed ? <button type="button" onClick={() => { unfollowUser(id); }}>{I18N.ENG.UNFOLLOW}</button>
      : <button type="button" onClick={() => { followUser(id); }}>{I18N.ENG.FOLLOW}</button>);
  };

  usersItem = ({
    id, photos, followed, name, status,
  }) => (
      <div key={id} className={style.item}>
        <div>
          <img src={photos.small !== null ? photos.small : defaultImg} alt="" className={style.img} />
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
    const { totalUsersCount, pageSize, } = this.props;

    return Math.ceil(totalUsersCount / pageSize);
  }

  usersContainer = () =>  this.props.users.map(this.usersItem);

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
