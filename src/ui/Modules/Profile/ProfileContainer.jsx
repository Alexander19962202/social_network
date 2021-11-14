import React from "react";
import {connect} from "react-redux"
import Profile from "./Profile";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../../redux/profilepage_reducer";
import withRouter from "react-router-dom/es/withRouter";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userID = this.props.match.params.userID;
        if (!userID)
            userID = this.props.userID;
        this.props.getProfile(userID);
        this.props.getProfileStatus(userID)
    }

    render() {
        return (
            <Profile profileInfoData={this.props.profileInfoData} myPostsData={this.props.myPostsData} updateProfileStatus={this.props.updateProfileStatus}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfoData: state.profilePage.profilePageData.profileInfoData,
        myPostsData: state.profilePage.profilePageData.myPostsData,
        isAuth: state.auth.authUserData.isAuth,
        userID: state.auth.authUserData.id
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withAuthRedirect,
    withRouter
)
(ProfileContainer);