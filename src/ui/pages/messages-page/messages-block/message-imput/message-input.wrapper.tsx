import React from "react";
import MessageInput, {MessageData} from "./message-input";

type Props = {
  onSendMessage: (messageText: string) => void
}

const MessageInputWrapper: React.FC<Props> = (props) => {
  let onSendMessage = (formData: MessageData) => {
    props.onSendMessage(formData.messageText);
  };

  return (
    <MessageInput onSubmit={onSendMessage}/>
  );
};

export default MessageInputWrapper;
