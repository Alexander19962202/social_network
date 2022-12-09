import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './Message.module.css' or its c... Remove this comment to see the full error message
import classes from './Message.module.css'

const Message = (props: any) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

export default Message;