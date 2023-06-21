import React from 'react';
import { useSelector } from 'react-redux';
import DialogsList from 'src/ui/pages/messages-page/dialogs-list/dialogs-list';
import { messengerStateDialogs } from 'src/store/slices/messenger/messenger.selectors';

const DialogsListContainer: React.FC = () => {
  const dialogs = useSelector(messengerStateDialogs);

  return <DialogsList dialogs={dialogs} />;
};

export default DialogsListContainer;
