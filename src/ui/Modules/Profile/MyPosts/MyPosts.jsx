import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPostsForm  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const MyPostsReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(MyPostsForm);

const MyPosts = (props) => {

    let myPostItems =
        props.myPostsData.myPostStateItems.map(post => <Post text={post.text} likeCount={post.likeCount} id={post.id} key={post.id}/>);

    let on_addPost = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={classes.postBlock}>
            <h3>My posts:</h3>
            <MyPostsReduxForm onSubmit={on_addPost}/>
            <div>
                {myPostItems}
            </div>
        </div>
    );
}

export default MyPosts;