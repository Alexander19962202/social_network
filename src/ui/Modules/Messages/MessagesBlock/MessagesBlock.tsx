import React from "react";
import classes from './MessagesBlock.module.css'
import Message from "./Message/Message";
import MessagesField from "./MessagesField/MessagesField";

const MessagesBlock = (props: any) => {

    let messageItems =
        props.messagesData.messageStateItems.map((m: any) => <Message message={m.message} id={m.id} key={m.id}/>);

    return (
        <div className={classes.messageBlock}>
            
            <div>
                {messageItems}
            </div>
            
            <MessagesField on_sendMessage={props.sendMessage}/>
        </div>
    );
};

export default MessagesBlock;
