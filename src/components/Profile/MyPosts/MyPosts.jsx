import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let myPostsData = [
        {text: 'How I learned Infra Hard', likeCount: 11},
        {text: 'How I learned Torba Black', likeCount: 22},
        {text: 'About Gimbarr in 2011', likeCount: 33}
    ];

    let myPostItems =
        myPostsData.map(post => <Post text={post.text} likeCount={post.likeCount}/>);

    return (
        <div className={classes.postBlock}>
            <h3>My posts:</h3>
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