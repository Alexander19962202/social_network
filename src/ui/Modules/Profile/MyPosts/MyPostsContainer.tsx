import React from 'react';
import {addPost} from "../../../../redux/reducers/profilepage_reducer";
// @ts-expect-error TS(6142): Module './MyPosts' was resolved to '/home/alexevs/... Remove this comment to see the full error message
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        myPostsData: state.profilePage.profilePageData.myPostsData
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;