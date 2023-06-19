import UserPostsList from './user-posts-list';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'src/store/store';
import { addPost } from 'src/store/slices/profiles/profiles.slice';

let mapStateToProps = (state: RootState) => {
  return {
    userPosts: state.profilePage.userPosts,
  };
};

const connector = connect(mapStateToProps, { addPost: (postText: string) => addPost({ postText }) });

export type UserPostsListProps = ConnectedProps<typeof connector>;

const UserPostsListContainer = connector(UserPostsList);

export default UserPostsListContainer;
