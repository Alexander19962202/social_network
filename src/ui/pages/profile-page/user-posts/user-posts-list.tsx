import React from 'react';

import { Post as UserPost } from 'src/store/slices/profiles/profiles.types';
import Post from 'src/ui/pages/profile-page/user-posts/post/post';
import PostsInput from 'src/ui/pages/profile-page/user-posts/posts-input/posts-input';
import classes from 'src/ui/pages/profile-page/user-posts/user-posts-list.module.scss';

type Props = {
  userPosts: UserPost[];
  addPost: (_: string) => void;
};

const UserPostsList = React.memo<Props>(({ userPosts, addPost }) => {
  const myPostItems = [...userPosts]
    .reverse()
    .map(post => <Post id={post.id} text={post.text} likeCount={post.likeCount} key={post.id} />);

  const onAddPost = (newPostText: string) => {
    addPost(newPostText);
  };

  return (
    <div className={classes.postBlock}>
      <h3>My posts:</h3>
      <PostsInput onSubmit={onAddPost} />
      <div>{myPostItems}</div>
    </div>
  );
});

export default UserPostsList;
