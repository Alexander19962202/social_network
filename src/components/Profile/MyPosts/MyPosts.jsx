import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts:
            <button>Add post</button>
            <div>
                <Post message='How I learned Infra Hard' likeCount='30'/>
                <Post message='How I learned Torba Black' likeCount='1'/>
                <Post message='About Gimbarr in 2011' likeCount='0'/>
            </div>
        </div>
    );
}

export default MyPosts;