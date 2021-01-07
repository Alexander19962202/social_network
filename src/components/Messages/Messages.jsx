import React from 'react'
import classes from'./Messages.module.css'
import Message from "./MessagesBlock/Message/Message";
import Dialog from "./DialogsBlock/Dialog/Dialog";
import DialogsBlock from "./DialogsBlock/DialogsBlock";
import MessagesBlock from "./MessagesBlock/MessagesBlock";

const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <DialogsBlock dialogsData={props.messagesPage.dialogsData}/>
            <MessagesBlock messagesData={props.messagesPage.messagesData}/>
        </div>
    );
}

export default Messages;