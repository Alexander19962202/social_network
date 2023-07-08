import React from 'react';

import classes from 'src/ui/pages/messages-page/messages-block/message-item/message-item.module.scss';

type Props = {
  id?: number;
  key?: number;
  message: string;
};

const MessageItem: React.FC<Props> = props => <div className={classes.message}>{props.message}</div>;

export default MessageItem;
