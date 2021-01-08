import React from "react";
import classes from './MessagesField.module.css'

const MessagesField = (props) => {

    let messageTextField = React.createRef();
    let on_sendMessage = () => {
        props.sendMessage();
    };
    let on_updateNewMessageText = () => {
        let newText = messageTextField.current.value;
        props.updateNewMessageText(newText);
    }

    return (
        <div className={classes.messagesField}>
            <div className={classes.textarea}>
                <textarea ref={messageTextField} className={classes.textarea} value={props.newMessageText} onChange={on_updateNewMessageText}/>
            </div>
            <div>
                <button className={classes.button} onClick={on_sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default MessagesField;