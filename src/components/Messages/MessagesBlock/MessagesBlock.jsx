import React from "react";
import classes from './MessagesBlock.module.css'
import Message from "./Message/Message";
import MessagesFieldContainer from "./MessagesField/MessagesFieldContainer";

const MessagesBlock = (props) => {

    let messageItems =
        props.messagesData.messageStateItems.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.messageBlock}>
            <div>
                {messageItems}
            </div>
            <MessagesFieldContainer newMessageText={props.messagesData.newMessageText} dispatch={props.dispatch}/>
        </div>
    );
}

export default MessagesBlock;