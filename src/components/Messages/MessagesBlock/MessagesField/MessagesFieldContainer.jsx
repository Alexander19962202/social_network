import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagespage_reducer";
import MessagesField from "./MessagesField";

const MessagesFieldContainer = (props) => {

    let on_sendMessage = () => {
        props.dispatch( sendMessageActionCreator() );
    };
    let on_updateNewMessageText = (text) => {
        props.dispatch( updateNewMessageTextActionCreator(text) );
    }

    return ( <MessagesField on_sendMessage={on_sendMessage} on_updateNewMessageText={on_updateNewMessageText} newMessageText={props.newMessageText}/> );
}

export default MessagesFieldContainer;