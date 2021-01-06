import React from 'react'
import classes from'./Messages.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {

    let dialogItems =
        props.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messageItems =
        props.messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.messages}>
            <div className={classes.dialogItems}>
                {dialogItems}
            </div>
            <div className={classes.messageItems}>
                {messageItems}
            </div>
        </div>
    );
}

export default Messages;