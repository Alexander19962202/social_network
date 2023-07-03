import React from 'react';
import classes from 'src/ui/pages/messages-page/dialogs-list/dialog-list.module.css';
import DialogItem from 'src/ui/pages/messages-page/dialogs-list/dialog-item/dialog-item';
import { Dialog } from 'src/store/slices/messenger/messenger.types';

type Props = {
  dialogs: Dialog[];
};

const DialogsList: React.FC<Props> = props => {
  let dialogItems = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />);

  return <div className={classes.dialogsBlock}>{dialogItems}</div>;
};

export default DialogsList;
