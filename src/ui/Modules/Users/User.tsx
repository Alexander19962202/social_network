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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NavLink to={'/profile/' + user.id}>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <img src={user.photos.small === null ? userPhoto : user.photos.small}
                             className={classes.userPhoto}/>
                    </NavLink>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>{user.name}</div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>{user.status}</div>
            </span>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>
                    {
                        user.followed ?
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <button disabled={usersFollowing.some((id: any) => id === user.id)} onClick={() => {
                                on_unfollow(user.id);
                            }}>UNFOLLOW</button> :
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <button disabled={usersFollowing.some((id: any) => id === user.id)} onClick={() => {
                                on_follow(user.id);
                            }}>FOLLOW</button>
                    }
                </div>
            </span>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>{"u.location.country} / {u.location.city"}</div>
            </span>
        </div>
    );
};

export default User;