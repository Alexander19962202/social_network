import React from 'react'
import classes from'./Messages.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Messages = () => {
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

    return (
        <div className={classes.messages}>
            <div className={classes.dialogItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
                <Dialog name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={classes.messageItems}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
            </div>
        </div>
    );
}

export default Messages;