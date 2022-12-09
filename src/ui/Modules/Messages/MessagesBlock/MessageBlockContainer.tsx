import {connect} from "react-redux"
import MessagesBlock from "./MessagesBlock";
import {sendMessage} from "../../../../redux/reducers/messagespage_reducer";

let mapStateToProps = (state: any) => {
    return {
        messagesData:  state.messagesPage.messagesPageData.messagesData
    }
};

const MessageBlockContainer = connect(mapStateToProps, {sendMessage})(MessagesBlock);

export default MessageBlockContainer;