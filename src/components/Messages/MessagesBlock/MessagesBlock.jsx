import React from "react";
import classes from './MessagesBlock.module.css'
import Message from "./Message/Message";
import MessagesField from "./MessagesField/MessagesField";

const MessagesBlock = (props) => {

    let messageItems =
        props.messagesData.messageStateItems.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.messageBlock}>
            <div>
                {messageItems}
            </div>
            <MessagesField on_sendMessage={props.on_sendMessage} on_updateNewMessageText={props.on_updateNewMessageText}
                           newMessageText={props.messagesData.newMessageText} />
        </div>
    );
};

export default MessagesBlock;