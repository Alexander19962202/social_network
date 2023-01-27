import React from "react";
import {connect, ConnectedProps} from "react-redux"
import UsersPage from "src/ui/pages/users-page/users-page"
import {
  follow,
  unfollow,
  requestUsers
} from "src/redux/reducers/users/users.thunks";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize, getPagesRange,
  getTotalUsersCount,
  getUsers
} from "src/redux/selectors/users.selector";
import {RootState} from "../../../redux/redux-store";

let mapStateToProps = (state: RootState) => {
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

const connector = connect(mapStateToProps, {follow, unfollow, requestUsers})

type Props = ConnectedProps<typeof connector>

class UsersPageContainer extends React.Component<Props> {
  componentDidMount() {
    const {currentUsersPage, pageSize} = this.props;
    this.props.requestUsers(currentUsersPage, pageSize);
  }

  on_currentPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <UsersPage pageSize={this.props.pageSize}
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

export default connector(UsersPageContainer);
