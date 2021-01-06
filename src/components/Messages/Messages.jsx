import React from 'react'
import classes from'./Messages.module.css'

const Messages = () => {
    return (
        <div className={classes.messages}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>Anya</div>
                <div className={classes.dialog}>Misha</div>
                <div className={classes.dialog}>Daniil</div>
                <div className={classes.dialog}>Sergey</div>
                <div className={classes.dialog}>Vladimir</div>
                <div className={classes.dialog}>Pavel</div>
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