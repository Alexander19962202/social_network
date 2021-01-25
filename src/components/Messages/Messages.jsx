import React from 'react'
import classes from'./Messages.module.css'
import DialogsBlock from "./DialogsBlock/DialogsBlock";
import MessagesBlock from "./MessagesBlock/MessagesBlock";

const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <DialogsBlock dialogsData={props.messagesPage.messagesPageData.dialogsData}/>
            <MessagesBlock messagesData={props.messagesPage.messagesPageData.messagesData} dispatch={props.dispatch}/>
        </div>
    );
}

export default Messages;