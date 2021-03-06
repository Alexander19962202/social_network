import React from "react";
import {connect} from "react-redux"
import Users from "./Users"
import {followAC, unfollowAC, setUsersAC} from "../../redux/userspage_reducer";

let mapStateToProps = (state) => {
    return {
        users:  state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        on_follow: (userID) => {
            dispatch(followAC(userID))
        },
        on_unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        on_setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;