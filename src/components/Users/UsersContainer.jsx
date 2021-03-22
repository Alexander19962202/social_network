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
import * as axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + String(this.props.currentUsersPage) + '&count=' + String(this.props.pageSize))
            .then(response => {
                this.props.on_setUsers(response.data.items);
                this.props.on_setTotalUsersCount(response.data.totalCount);
            });
    }

    on_currentPageChanged = (pageNumber) => {
        this.props.on_setCurrentUsersPage(pageNumber);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + String(this.props.currentUsersPage) + '&count=' + String(this.props.pageSize))
            .then(response => {
                this.props.on_setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentUsersPage={this.props.currentUsersPage}
                   pagesRange={this.props.pagesRange}
                   users={this.props.users}
                   on_follow={this.props.on_follow}
                   on_unfollow={this.props.on_unfollow}
                   on_currentPageChanged={this.on_currentPageChanged}
            />
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);