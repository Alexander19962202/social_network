import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let myPostsData = [
        {text: 'How I learned Infra Hard', likeCount: 11},
        {text: 'How I learned Torba Black', likeCount: 22},
        {text: 'About Gimbarr in 2011', likeCount: 33}
    ];

    return (
        <div className={classes.postBlock}>
            <h3>My posts:</h3>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <Post message='How I learned Infra Hard' likeCount='30'/>
                <Post message='How I learned Torba Black' likeCount='1'/>
                <Post message='About Gimbarr in 2011' likeCount='0'/>
            </div>
        </div>
    );
}

export default MyPosts;