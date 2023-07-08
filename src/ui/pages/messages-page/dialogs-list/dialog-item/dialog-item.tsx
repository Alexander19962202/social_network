import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from 'src/ui/pages/messages-page/dialogs-list/dialog-item/dialog-item.module.scss';

type Props = {
  id: number;
  avatar: string;
  name: string;
};

const DialogItem: React.FC<Props> = props => {
  const path = `/messenger-page/${props.id}`;
  return (
    <div className={classes.dialog}>
      <div>
        <img alt="" src={props.avatar} />
      </div>
      <div>
        <NavLink to={path} className={navData => (navData.isActive ? classes.active : '')}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
