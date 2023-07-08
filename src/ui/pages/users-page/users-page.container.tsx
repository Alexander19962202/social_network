import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUsers,
  usersStateCurrentPage,
  usersStateIsFetching,
  usersStatePageSize,
  usersStatePagesRange,
  usersStateTotalUsersCount,
  usersStateUsersFollowing,
} from 'src/store/slices/users/users.selectors';
import { follow, loadUsers, unfollow } from 'src/store/slices/users/users.thunks';
import { AppDispatch } from 'src/store/store';
import UsersPage from 'src/ui/pages/users-page/users-page';

const UsersPageContainer: React.FC = () => {
  const isFetching = useSelector(usersStateIsFetching);
  const users = useSelector(getUsers);
  const pageSize = useSelector(usersStatePageSize);
  const totalUsersCount = useSelector(usersStateTotalUsersCount);
  const pagesRange = useSelector(usersStatePagesRange);
  const usersFollowing = useSelector(usersStateUsersFollowing);
  const currentUsersPage = useSelector(usersStateCurrentPage);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadUsers({ currentUsersPage, pageSize }));
  }, []);

  const onCurrentPageChanged = (page: number) => {
    dispatch(loadUsers({ currentUsersPage: page, pageSize }));
  };
  const onFollow = (userId: number) => {
    dispatch(follow({ userId }));
  };
  const onUnfollow = (userId: number) => {
    dispatch(unfollow({ userId }));
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
      onCurrentPageChanged={onCurrentPageChanged}
      isFetching={isFetching}
      usersFollowing={usersFollowing}
    />
  );
};

export default UsersPageContainer;
