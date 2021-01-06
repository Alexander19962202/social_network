import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <img src='https://www.cossa.ru/upload/main/43d/9ca8909fe1a0b6307a0178d15ca7e298_ava2.png'/>
            </div>
            <div>{props.text}</div>
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;