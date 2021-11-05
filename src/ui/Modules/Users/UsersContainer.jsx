import React from "react";
import {connect} from "react-redux"
import Users from "./Users"
import {
    follow,
    unfollow,
    getUsers
} from "../../../redux/userspage_reducer";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentUsersPage, this.props.pageSize);
    }

    on_currentPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

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
                   usersFollowing={this.props.usersFollowing}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentUsersPage: state.usersPage.currentUsersPage,
        pagesRange: state.usersPage.pagesRange,
        isFetching: state.usersPage.isFetching,
        usersFollowing: state.usersPage.usersFollowing
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
    withAuthRedirect
)
(UsersContainer);