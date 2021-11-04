import React from "react";
import {connect} from "react-redux"
import Profile from "./Profile";
import {getProfile} from "../../../redux/profilepage_reducer";
import Redirect from "react-router-dom/es/Redirect";
import withRouter from "react-router-dom/es/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID)
            userID = 16064;
        this.props.getProfile(userID);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>;
        return (
            <Profile profileInfoData={this.props.profileInfoData} myPostsData={this.props.myPostsData}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfoData: state.profilePage.profilePageData.profileInfoData,
        myPostsData: state.profilePage.profilePageData.myPostsData,
        isAuth: state.auth.authUserData.isAuth
    }
};

const WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(WithUrlProfileContainer);