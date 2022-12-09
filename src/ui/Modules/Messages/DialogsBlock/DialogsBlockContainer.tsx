import {connect} from "react-redux"
import DialogsBlock from "./DialogsBlock";
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