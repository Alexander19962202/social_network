import { connect } from 'react-redux';
import MessagesBlock from 'src/ui/pages/messages-page/messages-block/messages-block';
import { sendMessage } from 'src/redux/slices/messenger/messenger.slice';
import { RootState } from 'src/redux/redux-store';

let mapStateToProps = (state: RootState) => {
  return {
    messages: state.messenger.messages,
  };
};

const MessagesBlockContainer = connect(mapStateToProps, { sendMessage: (message: string) => sendMessage({ message }) })(
  MessagesBlock,
);

export default MessagesBlockContainer;
