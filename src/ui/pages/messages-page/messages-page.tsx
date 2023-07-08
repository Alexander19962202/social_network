import { compose } from '@reduxjs/toolkit';
import React from 'react';

import withAuthRedirect from 'src/ui/common/hoc/with-auth-redirect';
import DialogsListContainer from 'src/ui/pages/messages-page/dialogs-list/dialog-list.container';
import MessagesBlockContainer from 'src/ui/pages/messages-page/messages-block/messages-block.container';
import classes from 'src/ui/pages/messages-page/messages-page.module.scss';

const MessagesPage = () => (
  <div className={classes.messages}>
    <DialogsListContainer />
    <MessagesBlockContainer />
  </div>
);

export default compose(withAuthRedirect)(MessagesPage);
