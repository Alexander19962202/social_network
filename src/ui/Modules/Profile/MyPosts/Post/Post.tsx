import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './Post.module.css' or its corr... Remove this comment to see the full error message
import classes from './Post.module.css'

const Post = (props: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={classes.item}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img src='https://sun1-14.userapi.com/impf/c849228/v849228610/19cd41/WsTFkn32rmI.jpg?size=200x0&quality=96&crop=1,319,1213,1213&sign=4eed9454f39b203c3bff8b36633be047&ava=1
'/>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>{props.text}</div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;