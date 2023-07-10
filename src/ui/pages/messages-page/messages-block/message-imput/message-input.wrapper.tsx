import React from 'react';

import MessageInput from './message-input';

type Props = {
  onSendMessage: (messageText: string) => void;
};

const MessageInputWrapper: React.FC<Props> = props => {
  const onSendMessage = (newMessageData: string) => {
    props.onSendMessage(newMessageData);
  };

  return <MessageInput onSubmit={onSendMessage} />;
};

export default MessageInputWrapper;
