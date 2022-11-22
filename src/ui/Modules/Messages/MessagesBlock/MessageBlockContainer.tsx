import React from "react";
import {connect} from "react-redux"
// @ts-expect-error TS(6142): Module './MessagesBlock' was resolved to '/home/al... Remove this comment to see the full error message
import MessagesBlock from "./MessagesBlock";
import {sendMessage} from "../../../../redux/reducers/messagespage_reducer";

let mapStateToProps = (state: any) => {
    return {
        messagesData:  state.messagesPage.messagesPageData.messagesData
    }
};

const MessageBlockContainer = connect(mapStateToProps, {sendMessage})(MessagesBlock);

export default MessageBlockContainer;