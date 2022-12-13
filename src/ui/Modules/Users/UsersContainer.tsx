import React from "react";
import {connect} from "react-redux"
import Users from "./Users"
import {
  follow,
  unfollow,
  requestUsers
} from "../../../redux/reducers/users/users.thunks";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize, getPagesRange,
  getTotalUsersCount,
  getUsers
} from "../../../redux/selectors/users_selector";

class UsersContainer extends React.Component<any, any> {

  componentDidMount() {
    const {currentUsersPage, pageSize} = this.props;
    this.props.requestUsers(currentUsersPage, pageSize);
  }

  on_currentPageChanged = (pageNumber: any) => {
    const {pageSize} = this.props;
    this.props.requestUsers(pageNumber, pageSize);
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

let mapStateToProps = (state: any) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentUsersPage: getCurrentPage(state),
    pagesRange: getPagesRange(state),
    isFetching: getIsFetching(state),
    usersFollowing: getFollowingInProgress(state)
  }
};

export default compose(
  connect(mapStateToProps, {follow, unfollow, requestUsers}),
)
(UsersContainer);
