import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './Users.module.css' or its cor... Remove this comment to see the full error message
import classes from './Users.module.css'
// @ts-expect-error TS(2307): Cannot find module '../../../assets/images/ic_pers... Remove this comment to see the full error message
import userPhoto from '../../../assets/images/ic_person_24px.svg'
import {NavLink} from "react-router-dom";

const User = ({
                  user,
                  on_follow,
                  on_unfollow,
                  usersFollowing
              }: any) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small === null ? userPhoto : user.photos.small}
                             className={classes.userPhoto}/>
                    </NavLink>
                </div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>
                    {
                        user.followed ?
                            <button disabled={usersFollowing.some((id: any) => id === user.id)} onClick={() => {
                                on_unfollow(user.id);
                            }}>UNFOLLOW</button> :
                            <button disabled={usersFollowing.some((id: any) => id === user.id)} onClick={() => {
                                on_follow(user.id);
                            }}>FOLLOW</button>
                    }
                </div>
            </span>
            <span>
                <div>{"u.location.country} / {u.location.city"}</div>
            </span>
        </div>
    );
};

export default User;