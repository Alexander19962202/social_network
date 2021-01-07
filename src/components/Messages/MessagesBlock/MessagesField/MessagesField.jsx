import React from "react";
import classes from './MessagesField.module.css'

const MessagesField = () => {

    let messageText = React.createRef();
    let sendMessage = () => {
        let text = messageText.current.value;
        alert(text);
    };

    return (
        <div className={classes.messagesField}>
            <div className={classes.textarea}>
                <textarea ref={messageText} className={classes.textarea}></textarea>
            </div>
            <div>
                <button className={classes.button} onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default MessagesField;