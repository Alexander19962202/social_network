import { addPost } from 'src/redux/reducers/profiles/profiles.action-creators';
import UserPostsList from './user-posts-list';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'src/redux/redux-store';

let mapStateToProps = (state: RootState) => {
  return {
    myPostsData: state.profilePage.profilePageData.myPostsData,
  };
};

const connector = connect(mapStateToProps, { addPost });

export type UserPostsListProps = ConnectedProps<typeof connector>;

const UserPostsListContainer = connector(UserPostsList);

export default UserPostsListContainer;
