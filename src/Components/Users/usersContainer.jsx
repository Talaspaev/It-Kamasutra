import { connect } from 'react-redux';

import { followUserActionCreator, unfollowUserActionCreator, setUserActionCreator } from '../../redux/redux-state';

import Users from './users';

const mapStateToProps = (state) => ({
  users: state.usersPages.users,
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

});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
