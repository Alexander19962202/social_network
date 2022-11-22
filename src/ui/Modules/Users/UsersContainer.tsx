import React from "react";
import {connect} from "react-redux"
// @ts-expect-error TS(6142): Module './Users' was resolved to '/home/alexevs/pe... Remove this comment to see the full error message
import Users from "./Users"
import {
    follow,
    unfollow,
    requestUsers
} from "../../../redux/reducers/userspage_reducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPagesRange,
    getTotalUsersCount,
    getUsers
} from "../../../redux/selectors/users_selector";

class UsersContainer extends React.Component {

    componentDidMount() {
        // @ts-expect-error TS(2339): Property 'currentUsersPage' does not exist on type... Remove this comment to see the full error message
        const {currentUsersPage, pageSize} = this.props;
        // @ts-expect-error TS(2339): Property 'requestUsers' does not exist on type 'Re... Remove this comment to see the full error message
        this.props.requestUsers(currentUsersPage, pageSize);
    }

    on_currentPageChanged = (pageNumber: any) => {
        // @ts-expect-error TS(2339): Property 'pageSize' does not exist on type 'Readon... Remove this comment to see the full error message
        const {pageSize} = this.props;
        // @ts-expect-error TS(2339): Property 'requestUsers' does not exist on type 'Re... Remove this comment to see the full error message
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Users pageSize={this.props.pageSize}
                   // @ts-expect-error TS(2339): Property 'totalUsersCount' does not exist on type ... Remove this comment to see the full error message
                   totalUsersCount={this.props.totalUsersCount}
                   // @ts-expect-error TS(2339): Property 'currentUsersPage' does not exist on type... Remove this comment to see the full error message
                   currentUsersPage={this.props.currentUsersPage}
                   // @ts-expect-error TS(2339): Property 'pagesRange' does not exist on type 'Read... Remove this comment to see the full error message
                   pagesRange={this.props.pagesRange}
                   // @ts-expect-error TS(2339): Property 'users' does not exist on type 'Readonly<... Remove this comment to see the full error message
                   users={this.props.users}
                   // @ts-expect-error TS(2339): Property 'follow' does not exist on type 'Readonly... Remove this comment to see the full error message
                   on_follow={this.props.follow}
                   // @ts-expect-error TS(2339): Property 'unfollow' does not exist on type 'Readon... Remove this comment to see the full error message
                   on_unfollow={this.props.unfollow}
                   on_currentPageChanged={this.on_currentPageChanged}
                   // @ts-expect-error TS(2339): Property 'isFetching' does not exist on type 'Read... Remove this comment to see the full error message
                   isFetching={this.props.isFetching}
                   // @ts-expect-error TS(2339): Property 'usersFollowing' does not exist on type '... Remove this comment to see the full error message
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