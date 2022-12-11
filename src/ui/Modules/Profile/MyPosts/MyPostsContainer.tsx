import {addPost} from "../../../../redux/reducers/profiles/profilepage_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        myPostsData: state.profilePage.profilePageData.myPostsData
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
