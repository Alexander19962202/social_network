import React from "react";
import {connect} from "react-redux"
import Users from "./Users"
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setTotalUsersCountAC,
    setCurrentUsersPage
} from "../../redux/userspage_reducer";

let mapStateToProps = (state) => {
    return {
        users:  state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentUsersPage: state.usersPage.currentUsersPage,
        pagesRange: state.usersPage.pagesRange
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
        },
        on_setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        on_setCurrentUsersPage: (page) => {
            dispatch(setCurrentUsersPage(page))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;