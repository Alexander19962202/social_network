import UserPostsList from './user-posts-list';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store/store';
import { addPost } from 'src/store/slices/profiles/profiles.slice';

const UserPostsListContainer = () => {
  const userPosts = useSelector((state: RootState) => state.profilePage.userPosts);
  const dispatch = useDispatch<AppDispatch>();

  const onAddPost = (postText: string) => {
    dispatch(addPost({ postText }));
  };

  return <UserPostsList userPosts={userPosts} addPost={onAddPost} />;
};

export default UserPostsListContainer;
