import React from 'react';
import classes from 'src/ui/pages/profile-page/user-posts/user-posts-list.module.css';
import { Post as UserPost } from 'src/store/slices/profiles/profiles.types';
import PostsInput, { PostData } from 'src/ui/pages/profile-page/user-posts/posts-input/posts-input';
import Post from 'src/ui/pages/profile-page/user-posts/post/post';

/**
 * @details Для оптимизации можно использовать memo, PureComponent или переопределить shouldComponentDidUpdate
 * @param props
 * @returns {*}
 * @constructor
 */

type Props = {
  userPosts: UserPost[];
  addPost: (_: string) => void;
};

const UserPostsList = React.memo<Props>(({ userPosts, addPost }) => {
  let myPostItems = [...userPosts]
    .reverse()
    .map(post => <Post id={post.id} text={post.text} likeCount={post.likeCount} key={post.id} />);

  let on_addPost = (formData: PostData) => {
    addPost(formData.newPostText);
  };

  return (
    <div className={classes.postBlock}>
      <h3>My posts:</h3>
      <PostsInput onSubmit={on_addPost} />
      <div>{myPostItems}</div>
    </div>
  );
});

export default UserPostsList;
