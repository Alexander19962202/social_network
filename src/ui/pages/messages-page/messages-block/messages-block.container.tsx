import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { messengerStateMessages } from 'src/store/slices/messenger/messenger.selectors';
import { sendMessage } from 'src/store/slices/messenger/messenger.slice';
import { AppDispatch } from 'src/store/store';
import MessagesBlock from 'src/ui/pages/messages-page/messages-block/messages-block';

const MessagesBlockContainer: React.FC = () => {
  const messages = useSelector(messengerStateMessages);
  const dispatch = useDispatch<AppDispatch>();

  const onSendMessage = (message: string) => {
    dispatch(sendMessage({ message }));
  };

  return <MessagesBlock messages={messages} sendMessage={onSendMessage} />;
};

export default MessagesBlockContainer;
