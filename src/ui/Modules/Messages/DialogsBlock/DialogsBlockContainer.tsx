import React from "react";
import {connect} from "react-redux"
// @ts-expect-error TS(6142): Module './DialogsBlock' was resolved to '/home/ale... Remove this comment to see the full error message
import DialogsBlock from "./DialogsBlock";
// @ts-expect-error TS(6142): Module '../../../common/hoc/withAuthRedirect' was ... Remove this comment to see the full error message
import withAuthRedirect from "../../../common/hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: any) => {
    return {
        dialogsData:  state.messagesPage.messagesPageData.dialogsData
    }
};

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)
(DialogsBlock);