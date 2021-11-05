import React from "react";
import {connect} from "react-redux"
import DialogsBlock from "./DialogsBlock";
import withAuthRedirect from "../../../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData:  state.messagesPage.messagesPageData.dialogsData
    }
};

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)
(DialogsBlock);