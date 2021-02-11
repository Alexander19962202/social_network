import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilepage_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../redux/StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let myPostsData = store.getState().profilePage.profilePageData.myPostsData;

                    let on_addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
                    let on_updateNewPostText = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    };

                    return (
                        <MyPosts on_addPost={on_addPost} on_updateNewPost={on_updateNewPostText}
                                 myPostsData={myPostsData}/>);
                }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;