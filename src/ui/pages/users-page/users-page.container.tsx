import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { AppDispatch, RootState } from 'src/store/store';

const UsersPageContainer: React.FC = () => {
  const users = useSelector((state: RootState) => getUsers(state));
  const pageSize = useSelector((state: RootState) => getPageSize(state));
  const totalUsersCount = useSelector((state: RootState) => getTotalUsersCount(state));
  const currentUsersPage = useSelector((state: RootState) => getCurrentPage(state));
  const pagesRange = useSelector((state: RootState) => getPagesRange(state));
  const isFetching = useSelector((state: RootState) => getIsFetching(state));
  const usersFollowing = useSelector((state: RootState) => getFollowingInProgress(state));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(requestUsers(currentUsersPage, pageSize));
  }, []);

  const on_currentPageChanged = (pageNumber: number) => {
    requestUsers(pageNumber, pageSize);
  };
  const onFollow = (userId: number) => {
    dispatch(follow(userId));
  };
  const onUnfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };

  return (
    <UsersPage
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      currentUsersPage={currentUsersPage}
      pagesRange={pagesRange}
      users={users}
      onFollow={onFollow}
      onUnfollow={onUnfollow}
      onCurrentPageChanged={on_currentPageChanged}
      isFetching={isFetching}
      usersFollowing={usersFollowing}
    />
  );
};

export default UsersPageContainer;
