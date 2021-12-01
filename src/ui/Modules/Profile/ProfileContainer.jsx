import React from "react";
import {connect} from "react-redux"
import Profile from "./Profile";
import {getProfile, getProfileStatus, updateProfileStatus, savePhoto} from "../../../redux/profilepage_reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile()
    {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.userID;
            if (!userID) {
                this.props.history.push("/login");
            }
        }
        this.props.getProfile(userID);
        this.props.getProfileStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID !== prevProps.match.params.userID ) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile profileInfoData={this.props.profileInfoData}
                     myPostsData={this.props.myPostsData}
                     updateProfileStatus={this.props.updateProfileStatus}
                     isOwner={!this.props.match.params.userID}
                     savePhoto={this.props.savePhoto}/>
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
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus, savePhoto}),
    withAuthRedirect,
    withRouter
)
(ProfileContainer);