import React from 'react';
import classes from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/ic_person_24px.svg'

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.on_setUsers(response.data.items);
        });
    }

    render() {
        return (
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
        );
    }
}

export default Users;