import React from "react";
import classes from './MessagesBlock.module.css'
import Message from "./Message/Message";
import MessagesField from "./MessagesField/MessagesField";

const MessagesBlock = (props) => {

    let messageItems =
        props.messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.messageBlock}>
            <div>
                {messageItems}
            </div>
            <MessagesField/>
        </div>
    );
}

export default MessagesBlock;