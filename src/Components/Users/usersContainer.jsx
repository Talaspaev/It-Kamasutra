import { connect } from 'react-redux';

import {
  followUserActionCreator, unfollowUserActionCreator, setUserActionCreator, setCurrentPageCreator, setTotalUsersCountCreator,
} from '../../redux/redux-state';

import Users from './Users';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
