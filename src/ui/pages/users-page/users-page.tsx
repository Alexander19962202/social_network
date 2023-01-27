import React from 'react';
import Preloader from "src/ui/common/components/preloader/preloader";
import Paginator from "src/ui/common/components/paginator/paginator";
import UserItem from "src/ui/pages/users-page/user-item/user-item";
import {IUser} from "src/redux/reducers/users/users.types";

type Props = {
  totalUsersCount: number,
  pageSize: number,
  currentUsersPage: number,
  on_currentPageChanged: (pageNumber: number) => void
  pagesRange: number,
  users: IUser[],
  on_follow: (userId: number) => void,
  on_unfollow: (userId: number) => void,
  isFetching: boolean
  usersFollowing: number[]
}

let UsersPage: React.FC<Props> = (props) => {
  return (
    <div>
      <Paginator totalItemsCount={props.totalUsersCount}
                 pageSize={props.pageSize}
                 pagesRange={props.pagesRange}
                 currentItemsPage={props.currentUsersPage}
                 on_currentPageChanged={props.on_currentPageChanged}/>

      {props.isFetching ? <Preloader/> :
        <div>
          {
            props.users.map((u) => <UserItem user={u} on_follow={props.on_follow} on_unfollow={props.on_unfollow}
                                                  usersFollowing={props.usersFollowing}/>)
          }
        </div>
      }
    </div>
  );
};

export default UsersPage;
