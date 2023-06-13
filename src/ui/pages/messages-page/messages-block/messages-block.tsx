import React from "react";
import classes from 'src/ui/pages/messages-page/messages-block/messages-block.module.css'
import MessageItem from "src/ui/pages/messages-page/messages-block/message-item/message-item";
import {MessagesData} from "src/redux/reducers/messages/messages.types";
import MessageInputWrapper from "src/ui/pages/messages-page/messages-block/message-imput/message-input.wrapper";

type Props = {
  messagesData: MessagesData,
  sendMessage: (messageText: string) => void
}

const MessagesBlock: React.FC<Props> = (props) => {
  let messageItems =
    props.messagesData.messageStateItems.map((m) => <MessageItem message={m.message} id={m.id} key={m.id}/>);

  return (
    <div className={classes.messageBlock}>
      <div>
        {messageItems}
      </div>
      <MessageInputWrapper onSendMessage={props.sendMessage}/>
    </div>
  );
};

export default MessagesBlock;
