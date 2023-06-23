import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersPage from 'src/ui/pages/users-page/users-page';
import { follow, unfollow } from 'src/store/slices/users/users.thunks';
import {
  usersStatePagesRange,
  getUsers,
  usersStateUsersFollowing,
  usersStatePageSize,
  usersStateTotalUsersCount,
  usersStateCurrentPage,
} from 'src/store/slices/users/users.selectors';
import { AppDispatch } from 'src/store/store';
import { useGetUsersQuery } from 'src/api/users/users.api';
import { setCurrentUsersPage } from 'src/store/slices/users/users.slice';

const UsersPageContainer: React.FC = () => {
  const users = useSelector(getUsers);
  const pageSize = useSelector(usersStatePageSize);
  const totalUsersCount = useSelector(usersStateTotalUsersCount);
  const pagesRange = useSelector(usersStatePagesRange);
  const usersFollowing = useSelector(usersStateUsersFollowing);
  const currentUsersPage = useSelector(usersStateCurrentPage);
  const dispatch = useDispatch<AppDispatch>();
  const { isFetching, refetch } = useGetUsersQuery({ currentPage: currentUsersPage, pageSize });

  useEffect(() => {
    if (!isFetching) {
      refetch();
    }
  }, [currentUsersPage]);

  const onCurrentPageChanged = (page: number) => {
    dispatch(setCurrentUsersPage({ page }));
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
      onCurrentPageChanged={onCurrentPageChanged}
      isFetching={isFetching}
      usersFollowing={usersFollowing}
    />
  );
};

export default UsersPageContainer;
