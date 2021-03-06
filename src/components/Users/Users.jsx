import React from 'react';
import classes from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.on_setUsers(
            [
                {
                    id: 1,
                    followed: true,
                    fullName: 'Ю. Дудь',
                    photoURL: 'https://problogerov.ru/wp-content/uploads/2020/03/jurij-dud-bloger.jpg',
                    status: 'Online',
                    location: {country: 'Russia', city: 'Moscow'}
                },
                {
                    id: 2,
                    followed: false,
                    fullName: 'О. Обломов',
                    photoURL: 'https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e45be6335e95e4cbeefee5e_5e46691a004f583c8ffd8e4b/scale_1200',
                    status: 'Online',
                    location: {country: 'Russia', city: 'Moscow'}
                },
                {
                    id: 3,
                    followed: false,
                    fullName: 'Ю. Хованский',
                    photoURL: 'https://problogerov.ru/wp-content/uploads/2020/05/jurij-hovanskij.jpg',
                    status: 'Offline',
                    location: {country: 'Russia', city: 'Moscow'}
                },
                {
                    id: 4,
                    followed: false,
                    fullName: 'Редклиф',
                    photoURL: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-04/16/16/asset/buzzfeed-prod-web-06/sub-buzz-27677-1555446278-1.jpg',
                    status: 'Online',
                    location: {country: 'Russia', city: 'Moscow'}
                },
                {
                    id: 5,
                    followed: false,
                    fullName: 'л. Дикаприо',
                    photoURL: 'https://teleprogramma.pro/wp-content/uploads/2015/11/fba38603d435cafead19dde845ba46d0.jpg',
                    status: 'Deleted',
                    location: {country: 'Russia', city: 'Moscow'}
                },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} className={classes.userPhoto}/>
                        </div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={ () => { props.on_unfollow(u.id)} }>UNFOLLOW</button> :
                                    <button onClick={ () => { props.on_follow(u.id)} }>FOLLOW</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.location.country} / {u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;