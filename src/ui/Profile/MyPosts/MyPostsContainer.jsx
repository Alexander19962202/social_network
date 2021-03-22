import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilepage_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        myPostsData: state.profilePage.profilePageData.myPostsData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        on_addPost: () => {
            dispatch(addPostActionCreator());
        },
        on_updateNewPost: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;