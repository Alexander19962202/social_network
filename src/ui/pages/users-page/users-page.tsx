import React from 'react';
import Preloader from 'src/ui/common/components/preloader/preloader';
import Paginator from 'src/ui/common/components/paginator/paginator';
import UserItem from 'src/ui/pages/users-page/user-item/user-item';
import { IUser } from 'src/store/slices/users/users.types';

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

let UsersPage: React.FC<Props> = props => {
  return (
    <div>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        pagesRange={props.pagesRange}
        currentItemsPage={props.currentUsersPage}
        on_currentPageChanged={props.onCurrentPageChanged}
      />

      {props.isFetching ? (
        <Preloader />
      ) : (
        <div>
          {props.users.map(u => (
            <UserItem
              key={u.id}
              user={u}
              on_follow={props.onFollow}
              on_unfollow={props.onUnfollow}
              usersFollowing={props.usersFollowing}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
