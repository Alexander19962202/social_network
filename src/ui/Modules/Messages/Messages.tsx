import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './Messages.module.css' or its ... Remove this comment to see the full error message
import classes from './Messages.module.css'
import DialogsBlockContainer from "./DialogsBlock/DialogsBlockContainer";
import MessageBlockContainer from "./MessagesBlock/MessageBlockContainer"

const Messages = (props: any) => {
    return (
        <div className={classes.messages}>
            
            <DialogsBlockContainer />
            
            <MessageBlockContainer />
        </div>
    );
};

export default Messages;