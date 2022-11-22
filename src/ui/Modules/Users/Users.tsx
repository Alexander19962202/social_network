import React from 'react';
// @ts-expect-error TS(6142): Module '../../common/widgets/Preloader/Preloader' ... Remove this comment to see the full error message
import Preloader from "../../common/widgets/Preloader/Preloader";
// @ts-expect-error TS(6142): Module '../../common/widgets/Paginator/Paginator' ... Remove this comment to see the full error message
import Paginator from "../../common/widgets/Paginator/Paginator";
// @ts-expect-error TS(6142): Module './User' was resolved to '/home/alexevs/pet... Remove this comment to see the full error message
import User from "./User";

let Users = (props: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentItemsPage={props.currentUsersPage}
                       on_currentPageChanged={props.on_currentPageChanged}/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {props.isFetching ? <Preloader/> :
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>
                    {
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        props.users.map((u: any) => <User user={u} on_follow={props.on_follow} on_unfollow={props.on_unfollow} usersFollowing={props.usersFollowing}/>)
                    }
                </div>
            }
        </div>
    );
};

export default Users;