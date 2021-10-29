import React from "react";
import {connect} from "react-redux"
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../../redux/profilepage_reducer";
import withRouter from "react-router-dom/es/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userID = this.props.match.params.userID;
        if(!userID)
            userID = 16064;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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
        myPostsData: state.profilePage.profilePageData.myPostsData
    }
};

const WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlProfileContainer);