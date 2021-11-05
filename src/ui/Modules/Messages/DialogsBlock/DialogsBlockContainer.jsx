import React from "react";
import {connect} from "react-redux"
import DialogsBlock from "./DialogsBlock";
import withAuthRedirect from "../../../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsData:  state.messagesPage.messagesPageData.dialogsData
    }
};

const WithAuthRedirectComponent = withAuthRedirect(DialogsBlock);
const DialogsBlockContainer = connect(mapStateToProps)(WithAuthRedirectComponent);

export default DialogsBlockContainer;