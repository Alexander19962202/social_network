import React from 'react';
import { useSelector } from 'react-redux';
import DialogsList from 'src/ui/pages/messages-page/dialogs-list/dialogs-list';
import { RootState } from 'src/store/store';

const DialogsListContainer: React.FC = () => {
  const dialogs = useSelector((state: RootState) => state.messenger.dialogs);

  return <DialogsList dialogs={dialogs} />;
};

export default DialogsListContainer;
