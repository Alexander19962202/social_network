import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import UsersPage from 'src/ui/pages/users-page/users-page';
import { follow, unfollow, requestUsers } from 'src/store/slices/users/users.thunks';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getPagesRange,
  getTotalUsersCount,
  getUsers,
} from 'src/store/slices/users/users.selector';
import { RootState } from 'src/store/store';

let mapStateToProps = (state: RootState) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentUsersPage: getCurrentPage(state),
    pagesRange: getPagesRange(state),
    isFetching: getIsFetching(state),
    usersFollowing: getFollowingInProgress(state),
  };
};

const connector = connect(mapStateToProps, { follow, unfollow, requestUsers });

type Props = ConnectedProps<typeof connector>;

const UsersPageContainer: React.FC<Props> = ({
  users,
  pageSize,
  currentUsersPage,
  pagesRange,
  usersFollowing,
  requestUsers,
  totalUsersCount,
  unfollow,
  follow,
  isFetching,
}) => {
  useEffect(() => {
    requestUsers(currentUsersPage, pageSize);
  }, []);

  const on_currentPageChanged = (pageNumber: number) => {
    requestUsers(pageNumber, pageSize);
  };

  return (
    <UsersPage
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      currentUsersPage={currentUsersPage}
      pagesRange={pagesRange}
      users={users}
      on_follow={follow}
      on_unfollow={unfollow}
      on_currentPageChanged={on_currentPageChanged}
      isFetching={isFetching}
      usersFollowing={usersFollowing}
    />
  );
};

export default connector(UsersPageContainer);
