import React from 'react';
import classes from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/ic_person_24px.svg'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + String(this.props.currentUsersPage) + '&count=' + String(this.props.pageSize))
            .then(response => {
                this.props.on_setUsers(response.data.items);
                this.props.on_setTotalUsersCount(response.data.totalCount);
            });
    }

    on_currentPageChanged(pageNumber) {
        this.props.on_setCurrentUsersPage(pageNumber);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + String(this.props.currentUsersPage) + '&count=' + String(this.props.pageSize))
            .then(response => {
                this.props.on_setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        let halfPagesRange = Math.ceil(this.props.pagesRange / 2);
        let firstPage = this.props.currentUsersPage > halfPagesRange ? (this.props.currentUsersPage - halfPagesRange) : 1;
        let lastPage = this.props.currentUsersPage > halfPagesRange ? (this.props.currentUsersPage + halfPagesRange) : this.props.currentUsersPage + (2 * halfPagesRange - 1);
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
                            return (<span className={p === this.props.currentUsersPage && classes.activePage}
                                          onClick={() => this.on_currentPageChanged(p)}>{p}</span>)
                        })
                    }
                </div>
                <div>
                    {
                        this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small === null ? userPhoto : u.photos.small}
                                 className={classes.userPhoto}/>
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                            <span>
                            <div>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        this.props.on_unfollow(u.id)
                                    }}>UNFOLLOW</button> :
                                    <button onClick={() => {
                                        this.props.on_follow(u.id)
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
            </div>
        );
    }
}

export default Users;