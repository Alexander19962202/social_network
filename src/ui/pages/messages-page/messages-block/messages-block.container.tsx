import { connect } from 'react-redux';
import MessagesBlock from 'src/ui/pages/messages-page/messages-block/messages-block';
import { sendMessage } from 'src/redux/slices/messages/messages.action-creators';
import { RootState } from 'src/redux/redux-store';

let mapStateToProps = (state: RootState) => {
  return {
    messagesData: state.messagesPage.messagesPageData.messagesData,
  };
};

const MessagesBlockContainer = connect(mapStateToProps, { sendMessage })(MessagesBlock);

export default MessagesBlockContainer;
