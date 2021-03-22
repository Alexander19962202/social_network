import React from "react";
import {connect} from "react-redux"
import MessagesBlock from "./MessagesBlock";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagespage_reducer";

let mapStateToProps = (state) => {
    return {
        messagesData:  state.messagesPage.messagesPageData.messagesData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        on_sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        on_updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
};

const MessageBlockContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesBlock);

export default MessageBlockContainer;