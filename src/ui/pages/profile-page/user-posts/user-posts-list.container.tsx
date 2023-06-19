import { addPost } from 'src/store/slices/profiles/profiles.action-creators';
import UserPostsList from './user-posts-list';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'src/store/redux-store';

let mapStateToProps = (state: RootState) => {
  return {
    myPostsData: state.profilePage.profilePageData.myPostsData,
  };
};

const connector = connect(mapStateToProps, { addPost });

export type UserPostsListProps = ConnectedProps<typeof connector>;

const UserPostsListContainer = connector(UserPostsList);

export default UserPostsListContainer;
