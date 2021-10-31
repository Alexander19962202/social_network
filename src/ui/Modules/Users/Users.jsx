import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../../../assets/images/ic_person_24px.svg'
import Preloader from "../../widgets/Preloader";
import NavBar from "../../NavBar/NavBar";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let halfPagesRange = Math.ceil(props.pagesRange / 2);
    let firstPage = props.currentUsersPage > halfPagesRange ? (props.currentUsersPage - halfPagesRange) : 1;
    let lastPage = props.currentUsersPage > halfPagesRange ? (props.currentUsersPage + halfPagesRange) : props.currentUsersPage + (2 * halfPagesRange - 1);
    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i);
        if (i === pagesCount) {
            break;
        }
    }

    return (
        <div>
            <div className={classes.pagesWidget}>
                {
                    pages.map(p => {
                        return (<span className={p === props.currentUsersPage && classes.activePage}
                                      onClick={(e) => {
                                          props.on_currentPageChanged(p);
                                      }}>{p}</span>)
                    })
                }
            </div>
            {props.isFetching ? <Preloader/> :
                <div>
                    {
                        props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small === null ? userPhoto : u.photos.small}
                                     className={classes.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                            <span>
                            <div>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY" : "41a301f3-1510-488a-b73d-f4713384558e"
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode === 0)
                                                    props.on_unfollow(u.id);
                                            });
                                    }}>UNFOLLOW</button> :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY" : "41a301f3-1510-488a-b73d-f4713384558e"
                                            }
                                        })
                                            .then(response => {

                                                if(response.data.resultCode === 0)
                                                    props.on_follow(u.id);
                                            });
                                    }}>FOLLOW</button>
                            }
                            </div>
                        </span>
                            <span>
                            <div>{"u.location.country} / {u.location.city"}</div>
                        </span>
                        </div>)
                    }
                </div>
            }
        </div>
    );
};

export default Users;