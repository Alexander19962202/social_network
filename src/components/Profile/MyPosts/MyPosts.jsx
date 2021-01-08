import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let myPostItems =
        props.myPostsData.myPostStateItems.map(post => <Post text={post.text} likeCount={post.likeCount}/>);

    let newPostTextField = React.createRef();
    let on_addPost = () => {
        props.addPost();
    }
    let on_updateNewPostText = () => {
        let newText = newPostTextField.current.value;
        props.updateNewPostText(newText);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts:</h3>
            <textarea ref={newPostTextField} value={props.myPostsData.newPostText} onChange={on_updateNewPostText}/>
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