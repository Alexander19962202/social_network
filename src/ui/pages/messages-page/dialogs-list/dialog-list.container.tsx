import { connect } from 'react-redux';
import DialogsList from 'src/ui/pages/messages-page/dialogs-list/dialogs-list';
import withAuthRedirect from 'src/ui/common/hoc/with-auth-redirect';
import { compose } from 'redux';
import { RootState } from 'src/store/redux-store';

const mapStateToProps = (state: RootState) => ({
  dialogs: state.messenger.dialogs,
});

const DialogsListContainer = compose(connect(mapStateToProps), withAuthRedirect)(DialogsList);

export default DialogsListContainer;
