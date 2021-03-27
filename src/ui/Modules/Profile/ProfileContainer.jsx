import React from "react";
import {connect} from "react-redux"
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../../redux/profilepage_reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
            axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);