import React from "react";
import classes from './MessagesBlock.module.css'
import Message from "./Message/Message";
import MessagesFieldContainer from "./MessagesField/MessagesFieldContainer";
import StoreContext from "../../../redux/StoreContext";

const MessagesBlock = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let messageItems =
                        store.getState().messagesPage.messagesPageData.messagesData.messageStateItems.map(m => <Message message={m.message}/>);

                    return (
                        <div className={classes.messageBlock}>
                            <div>
                                {messageItems}
                            </div>
                            <MessagesFieldContainer/>
                        </div>
                    );
                }
            }
        </StoreContext.Consumer>
    )
};

export default MessagesBlock;