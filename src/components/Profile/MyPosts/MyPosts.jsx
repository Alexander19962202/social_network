import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let myPostItems =
        props.myPostData.map(post => <Post text={post.text} likeCount={post.likeCount}/>);

    return (
        <div className={classes.postBlock}>
            <h3>My posts:</h3>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>
            <div>
                {myPostItems}
            </div>
        </div>
    );
}

export default MyPosts;