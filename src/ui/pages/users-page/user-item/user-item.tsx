import React from 'react';
import { NavLink } from 'react-router-dom';

import userPhoto from 'src/assets/images/ic_person_24px.svg';
import { IUser } from 'src/store/slices/users/users.types';
import classes from 'src/ui/pages/users-page/users-page.module.scss';

type Props = {
  user: IUser;
  onFollow: (userId: number) => void;
  onUnfollow: (userId: number) => void;
  usersFollowing: number[];
};

const UserItem: React.FC<Props> = ({ user, onFollow, onUnfollow, usersFollowing }) => (
  <div>
    <span>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <img alt="" className={classes.userPhoto} src={user.photos.small === null ? userPhoto : user.photos.small} />
        </NavLink>
      </div>
      <div>{user.name}</div>
      <div>{user.status}</div>
    </span>
    <span>
      <div>
        {user.followed ? (
          <button
            disabled={usersFollowing.some(id => id === user.id)}
            onClick={() => {
              onUnfollow(user.id);
            }}
          >
            UNFOLLOW
          </button>
        ) : (
          <button
            disabled={usersFollowing.some(id => id === user.id)}
            onClick={() => {
              onFollow(user.id);
            }}
          >
            FOLLOW
          </button>
        )}
      </div>
    </span>
  </div>
);

export default UserItem;
