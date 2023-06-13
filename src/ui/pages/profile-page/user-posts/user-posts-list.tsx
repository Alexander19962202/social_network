import React from 'react';
import classes from 'src/ui/pages/profile-page/user-posts/user-posts-list.module.css'
import Post from "src/ui/pages/profile-page/user-posts/post/post";
import PostsInput, {PostData} from "src/ui/pages/profile-page/user-posts/posts-input/posts-input";
import {UserPostsListProps} from "src/ui/pages/profile-page/user-posts/user-posts-list.container";

/**
 * @details Для оптимизации можно использовать memo, PureComponent или переопределить shouldComponentDidUpdate
 * @param props
 * @returns {*}
 * @constructor
 */
const UserPostsList = React.memo<UserPostsListProps>((props) => {
  let myPostItems =
    [...props.myPostsData.myPostStateItems]
      .reverse()
      .map(post =>
        <Post id={post.id}
          text={post.text}
          likeCount={post.likeCount}
          key={post.id}/>);

  let on_addPost = (formData: PostData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={classes.postBlock}>
      <h3>My posts:</h3>
      <PostsInput onSubmit={on_addPost}/>
      <div>
        {myPostItems}
      </div>
    </div>
  );
});

export default UserPostsList;
