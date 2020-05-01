import { connect } from 'react-redux';

import { addPostActionCreator, updatePostActionCreator } from '../../../redux/redux-state';

import MyPosts from './myPosts';

const mapStateToProps = (state) => ({ profilePages: state.profilePages });

const dispatchStateToProps = (dispatch) => ({
  addPost: () => {
    dispatch(addPostActionCreator());
  },
  handlerPost: (text) => {
    dispatch(updatePostActionCreator(text));
  },
});

const MyPostsContainer = connect(mapStateToProps, dispatchStateToProps)(MyPosts);

export default MyPostsContainer;
