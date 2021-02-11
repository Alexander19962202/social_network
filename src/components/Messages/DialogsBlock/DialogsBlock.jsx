import React from "react";
import classes from './DialogsBlock.module.css'
import Dialog from "./Dialog/Dialog";
import StoreContext from "../../../redux/StoreContext";

const DialogsBlock = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogItems =
                        store.getState().messagesPage.messagesPageData.dialogsData.dialogStateItems.map(d => <Dialog name={d.name} id={d.id} avatar={d.avatar}/>);

                    return (
                        <div className={classes.dialogsBlock}>
                            {dialogItems}
                        </div>
                    );
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsBlock;