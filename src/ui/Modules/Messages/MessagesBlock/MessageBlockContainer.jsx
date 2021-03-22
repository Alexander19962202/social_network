import React from "react";
import {connect} from "react-redux"
import MessagesBlock from "./MessagesBlock";
import {sendMessage, updateNewMessageText} from "../../../../redux/messagespage_reducer";

let mapStateToProps = (state) => {
    return {
        messagesData:  state.messagesPage.messagesPageData.messagesData
    }
};

const MessageBlockContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(MessagesBlock);

export default MessageBlockContainer;