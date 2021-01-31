import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilepage_reducer";

const MyPosts = (props) => {

    let myPostItems =
        props.myPostsData.myPostStateItems.map(post => <Post text={post.text} likeCount={post.likeCount}/>);

    let on_addPost = () => {
        props.on_addPost();
    }
    let on_updateNewPostText = (e) => {
        let newText = e.target.value;
        props.on_updateNewPost(newText);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts:</h3>
            <textarea placeholder='Enter new post' value={props.myPostsData.newPostText} onChange={on_updateNewPostText}/>
            <div>
                <button onClick={on_addPost}>Add post</button>
            </div>
            <div>
                {myPostItems}
            </div>
        </div>
    );
}

export default MyPosts;