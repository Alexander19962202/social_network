import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let myPostItems =
        props.myPostData.map(post => <Post text={post.text} likeCount={post.likeCount}/>);

    let newPost = React.createRef();
    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
        newPost.current.value = '';
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts:</h3>
            <textarea ref={newPost}></textarea>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {myPostItems}
            </div>
        </div>
    );
}

export default MyPosts;