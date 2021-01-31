import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilepage_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let myPostsData = props.myPostsData;

    let on_addPost = () => {
        props.dispatch( addPostActionCreator() );
    }
    let on_updateNewPostText = (text) => {
        props.dispatch( updateNewPostTextActionCreator(text) );
    }

    return (<MyPosts on_addPost={on_addPost} on_updateNewPost={on_updateNewPostText} myPostsData={myPostsData} />);
}

export default MyPostsContainer;