import {connect} from "react-redux"
import MessagesBlock from "./MessagesBlock";
import {sendMessage} from "../../../../redux/reducers/messages/messages.action-creators";

let mapStateToProps = (state: any) => {
    return {
        messagesData:  state.messagesPage.messagesPageData.messagesData
    }
};

const MessageBlockContainer = connect(mapStateToProps, {sendMessage})(MessagesBlock);

export default MessageBlockContainer;
