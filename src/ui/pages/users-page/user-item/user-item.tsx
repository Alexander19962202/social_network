import React from 'react';
import classes from 'src/ui/pages/users-page/users-page.module.css';
import userPhoto from 'src/assets/images/ic_person_24px.svg';
import { NavLink } from 'react-router-dom';
import { IUser } from 'src/redux/slices/users/users.types';

type Props = {
  user: IUser;
  on_follow: (userId: number) => void;
  on_unfollow: (userId: number) => void;
  usersFollowing: number[];
};

const UserItem: React.FC<Props> = ({ user, on_follow, on_unfollow, usersFollowing }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              alt=""
              className={classes.userPhoto}
              src={user.photos.small === null ? userPhoto : user.photos.small}
            />
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
                on_unfollow(user.id);
              }}
            >
              UNFOLLOW
            </button>
          ) : (
            <button
              disabled={usersFollowing.some(id => id === user.id)}
              onClick={() => {
                on_follow(user.id);
              }}
            >
              FOLLOW
            </button>
          )}
        </div>
      </span>
    </div>
  );
};

export default UserItem;
