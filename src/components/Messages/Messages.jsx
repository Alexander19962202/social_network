import React from 'react'
import classes from'./Messages.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Messages = () => {
    return (
        <div className={classes.messages}>
            <div className={classes.dialogItems}>
                <Dialog name='Anna' id='1'/>
                <Dialog name='Valera' id='2'/>
                <Dialog name='Daniil' id='3'/>
                <Dialog name='Sergey' id='4'/>
                <Dialog name='Andrey' id='5'/>
                <Dialog name='Viktor' id='6'/>
                <Dialog name='Boris' id='7'/>
            </div>
            <div className={classes.messageItems}>
                <Message message='Hello!'/>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
            </div>
        </div>
    );
}

export default Messages;