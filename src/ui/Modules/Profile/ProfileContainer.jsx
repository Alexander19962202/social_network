import React from "react";
import {connect} from "react-redux"
import Profile from "./Profile";
import {getProfile} from "../../../redux/profilepage_reducer";
import withRouter from "react-router-dom/es/withRouter";
import withAuthRedirect from "../../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID)
            userID = 16064;
        this.props.getProfile(userID);
    }

    render() {
        return (
            <Profile profileInfoData={this.props.profileInfoData} myPostsData={this.props.myPostsData}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfoData: state.profilePage.profilePageData.profileInfoData,
        myPostsData: state.profilePage.profilePageData.myPostsData,
    }
};

const WithUrlProfileContainer = withRouter(ProfileContainer);
const WithAuthRedirectComponent = withAuthRedirect(WithUrlProfileContainer);

export default connect(mapStateToProps, {getProfile})(WithAuthRedirectComponent);