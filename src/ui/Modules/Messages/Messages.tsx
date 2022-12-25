import React from 'react'
import classes from './Messages.module.css'
import DialogsBlockContainer from "./DialogsBlock/DialogsBlockContainer";
import MessageBlockContainer from "./MessagesBlock/MessageBlockContainer"

const Messages = () => {
    return (
        <div className={classes.messages}>
            <DialogsBlockContainer />
            <MessageBlockContainer />
        </div>
    );
};

export default Messages;
