import React from 'react';

import { Dialog } from 'src/store/slices/messenger/messenger.types';
import DialogItem from 'src/ui/pages/messages-page/dialogs-list/dialog-item/dialog-item';
import classes from 'src/ui/pages/messages-page/dialogs-list/dialog-list.module.scss';

type Props = {
  dialogs: Dialog[];
};

const DialogsList: React.FC<Props> = props => {
  const dialogItems = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />);

  return <div className={classes.dialogsBlock}>{dialogItems}</div>;
};

export default DialogsList;
