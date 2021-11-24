import React from 'react'
import classes from './Paginator.module.css'

let Paginator = (props) => {
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
    debugger
    return (
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
    )
};

export default Paginator;