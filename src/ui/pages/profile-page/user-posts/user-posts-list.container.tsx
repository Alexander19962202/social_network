import UserPostsList from './user-posts-list';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { addPost } from 'src/store/slices/profiles/profiles.slice';
import { profilesStateUserPosts } from 'src/store/slices/profiles/profiles.selectors';

const UserPostsListContainer = () => {
  const userPosts = useSelector(profilesStateUserPosts);
  const dispatch = useDispatch<AppDispatch>();

  const onAddPost = (postText: string) => {
    dispatch(addPost({ postText }));
  };

  return <UserPostsList userPosts={userPosts} addPost={onAddPost} />;
};

export default UserPostsListContainer;
