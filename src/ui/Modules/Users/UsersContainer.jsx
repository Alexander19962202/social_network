import React from "react";
import {connect} from "react-redux"
import Users from "./Users"
import {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentUsersPage,
    setFetchingMode
} from "../../../redux/userspage_reducer";
import * as axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetchingMode(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + String(this.props.currentUsersPage) + '&count=' + String(this.props.pageSize), {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setFetchingMode(false);
            });
    }

    on_currentPageChanged = (pageNumber) => {
        this.props.setCurrentUsersPage(pageNumber);
        this.props.setFetchingMode(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + String(this.props.currentUsersPage) + '&count=' + String(this.props.pageSize), {
            withCredentials:true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetchingMode(false);
            });
    }

    render() {
        return (
            <Users pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentUsersPage={this.props.currentUsersPage}
                   pagesRange={this.props.pagesRange}
                   users={this.props.users}
                   on_follow={this.props.follow}
                   on_unfollow={this.props.unfollow}
                   on_currentPageChanged={this.on_currentPageChanged}
                   isFetching={this.props.isFetching}
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
        pagesRange: state.usersPage.pagesRange,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalUsersCount, setCurrentUsersPage, setFetchingMode})(UsersContainer);