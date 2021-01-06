import React from 'react'
import classes from'./Messages.module.css'
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <div className={classes.messages}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/messages/1' activeClassName={classes.active}>Anna</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/messages/2' activeClassName={classes.active}>Dmitriy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/messages/3' activeClassName={classes.active}>Vladimir</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/messages/4' activeClassName={classes.active}>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/messages/5' activeClassName={classes.active}>Anton</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/messages/6' activeClassName={classes.active}>Sergey</NavLink>
                </div>
            </div>
            <div className={classes.messageItems}>
                <div className={classes.message}>Hello!!</div>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How are you?</div>
            </div>
        </div>
    );
}

export default Messages;