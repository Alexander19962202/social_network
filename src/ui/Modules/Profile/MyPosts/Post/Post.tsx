import React from 'react';
import classes from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={classes.item}>
            
            <div>
                
                <img src='https://sun1-14.userapi.com/impf/c849228/v849228610/19cd41/WsTFkn32rmI.jpg?size=200x0&quality=96&crop=1,319,1213,1213&sign=4eed9454f39b203c3bff8b36633be047&ava=1
'/>
            </div>
            
            <div>{props.text}</div>
            
            <div>
                
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;
