import {connect} from "react-redux"
import DialogsList from "src/ui/pages/messages-page/dialogs-list/dialogs-list";
import withAuthRedirect from "src/ui/common/hoc/with-auth-redirect";
import {compose} from "redux";
import {RootState} from "src/redux/redux-store";

let mapStateToProps = (state: RootState) => ({
  dialogsData: state.messagesPage.messagesPageData.dialogsData
});

const DialogsListContainer = compose(
  connect(mapStateToProps),
  withAuthRedirect
)
(DialogsList);

export default DialogsListContainer;
