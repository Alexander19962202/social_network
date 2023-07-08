import React from 'react';

import { IUser } from 'src/store/slices/users/users.types';
import Paginator from 'src/ui/common/components/paginator/paginator';
import Preloader from 'src/ui/common/components/preloader/preloader';
import UserItem from 'src/ui/pages/users-page/user-item/user-item';

type Props = {
  totalUsersCount: number;
  pageSize: number;
  currentUsersPage: number;
  onCurrentPageChanged: (pageNumber: number) => void;
  pagesRange: number;
  users: IUser[];
  onFollow: (userId: number) => void;
  onUnfollow: (userId: number) => void;
  isFetching: boolean;
  usersFollowing: number[];
};

const UsersPage: React.FC<Props> = props => (
  <div>
    <Paginator
      totalItemsCount={props.totalUsersCount}
      pageSize={props.pageSize}
      pagesRange={props.pagesRange}
      currentItemsPage={props.currentUsersPage}
      onCurrentPageChanged={props.onCurrentPageChanged}
    />

    {props.isFetching ? (
      <Preloader />
    ) : (
      <div>
        {props.users.map(u => (
          <UserItem
            key={u.id}
            user={u}
            onFollow={props.onFollow}
            onUnfollow={props.onUnfollow}
            usersFollowing={props.usersFollowing}
          />
        ))}
      </div>
    )}
  </div>
);

export default UsersPage;
