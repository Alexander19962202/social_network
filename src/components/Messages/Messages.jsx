import React from 'react'
import classes from'./Messages.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    let dialogsData = [
        {name: 'Anna', id: 1},
        {name: 'Valera', id: 2},
        {name: 'Daniil', id: 3},
        {name: 'Sergey', id: 4},
        {name: 'Andrey', id: 5},
        {name: 'Boris', id: 6}
    ];
    let messageData = [
        {message: 'Hello!'},
        {message: 'Hi!'},
        {message: 'How are you?'},
        {message: 'Good!!!'}
    ];

    let dialogItems =
        dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messageItems =
        messageData.map(m => <Message message={m.message}/>);

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