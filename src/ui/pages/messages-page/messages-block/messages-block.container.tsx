import React from 'react';
import { AppDispatch, RootState } from 'src/store/store';
import MessagesBlock from 'src/ui/pages/messages-page/messages-block/messages-block';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from 'src/store/slices/messenger/messenger.slice';

const MessagesBlockContainer: React.FC = () => {
  const messages = useSelector((state: RootState) => state.messenger.messages);
  const dispatch = useDispatch<AppDispatch>();

  const onSendMessage = (message: string) => {
    dispatch(sendMessage({ message }));
  };

  return <MessagesBlock messages={messages} sendMessage={onSendMessage} />;
};

export default MessagesBlockContainer;
