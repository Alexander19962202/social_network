import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../../../assets/images/ic_person_24px.svg'
import Preloader from "../../widgets/Preloader";
import {NavLink} from "react-router-dom";
import Paginator from "../../widgets/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentUsersPage={props.currentUsersPage}
                       on_currentPageChanged={props.on_currentPageChanged}
                       pagesRange={props.pagesRange}/>
            {props.isFetching ? <Preloader/> :
                <div>
                    {
                        props.users.map(u => <User user={u} on_follow={props.on_follow} on_unfollow={props.on_unfollow} usersFollowing={props.usersFollowing}/>)
                    }
                </div>
            }
        </div>
    );
};

export default Users;