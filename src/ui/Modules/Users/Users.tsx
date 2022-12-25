import React from 'react';
import Preloader from "../../common/widgets/preloader/preloader";
import Paginator from "../../common/widgets/paginator/paginator";
import User from "./User";

let Users = (props: any) => {
    return (
        <div>
            
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentItemsPage={props.currentUsersPage}
                       on_currentPageChanged={props.on_currentPageChanged}/>
            
            {props.isFetching ? <Preloader/> :
                <div>
                    {
                        props.users.map((u: any) => <User user={u} on_follow={props.on_follow} on_unfollow={props.on_unfollow} usersFollowing={props.usersFollowing}/>)
                    }
                </div>
            }
        </div>
    );
};

export default Users;
