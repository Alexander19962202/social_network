import React from "react";
import {connect} from "react-redux"
import DialogsBlock from "./DialogsBlock";

let mapStateToProps = (state) => {
    return {
        dialogsData:  state.messagesPage.messagesPageData.dialogsData
    }
};

const DialogsBlockContainer = connect(mapStateToProps)(DialogsBlock);

export default DialogsBlockContainer;