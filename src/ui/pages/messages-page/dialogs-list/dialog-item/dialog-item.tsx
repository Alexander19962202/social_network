import React from 'react';
import classes from 'src/ui/pages/messages-page/dialogs-list/dialog-item/dialog-item.module.css';
import { NavLink } from 'react-router-dom';

type Props = {
  id: number;
  avatar: string;
  name: string;
};

const DialogItem: React.FC<Props> = props => {
  let path = '/messenger-page/' + props.id;
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
