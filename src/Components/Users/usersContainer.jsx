import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import { API } from '../../constants';
import {
  followUserActionCreator, unfollowUserActionCreator, setUserActionCreator, setCurrentPageCreator, setTotalUsersCountCreator,
} from '../../redux/redux-state';

import Users from './users';

class UsersApiContainer extends React.Component {
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

   pagesCount = () => {
    const { totalUsersCount, pageSize } = this.props;

    return Math.ceil(totalUsersCount / pageSize);
  };

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

  render() {
    return <Users currentPage={this.props}
    onPageSelected={this.onPageSelected}
    pages = {this.state.pages}
    followUser={this.props}
    unfollowUser={this.props}
    totalUsersCount={this.props}
    pageSize={this.props}
    users={this.props.users}
    />
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPages.users,
  pageSize: state.usersPages.pageSize,
  totalUsersCount: state.usersPages.totalUsersCount,
  currentPage: state.usersPages.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  followUser: (userId) => {
    dispatch(followUserActionCreator(userId));
  },
  unfollowUser: (userId) => {
    dispatch(unfollowUserActionCreator(userId));
  },
  setUsers: (users) => {
    dispatch(setUserActionCreator(users));
  },
  setCurrentPage: (currentPage) => {
    dispatch(setCurrentPageCreator(currentPage));
  },
  setTotalUsersCount: (totalUsersCount) => {
    dispatch(setTotalUsersCountCreator(totalUsersCount));
  },

});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);

export default UsersContainer;
