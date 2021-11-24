import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../../../assets/images/ic_person_24px.svg'
import {NavLink} from "react-router-dom";

const User = ({user, on_follow, on_unfollow, usersFollowing}) => {
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
                            <button disabled={usersFollowing.some(id => id === user.id)} onClick={() => {
                                on_unfollow(user.id);
                            }}>UNFOLLOW</button> :
                            <button disabled={usersFollowing.some(id => id === user.id)} onClick={() => {
                                on_follow(user.id);
                            }}>FOLLOW</button>
                    }
                </div>
            </span>
            <span>
                <div>{"u.location.country} / {u.location.city"}</div>
            </span>
        </div>
    )
};

export default User;