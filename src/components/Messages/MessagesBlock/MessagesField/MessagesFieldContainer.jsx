import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messagespage_reducer";
import MessagesField from "./MessagesField";
import StoreContext from "../../../../redux/StoreContext";

const MessagesFieldContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let newMessageText = store.getState().messagesPage.messagesPageData.messagesData.newMessageText;

                    let on_sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    };
                    let on_updateNewMessageText = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    };

                    return (
                        <MessagesField on_sendMessage={on_sendMessage} on_updateNewMessageText={on_updateNewMessageText}
                                       newMessageText={newMessageText}/>);
                }
            }
        </StoreContext.Consumer>
    )
};

export default MessagesFieldContainer;