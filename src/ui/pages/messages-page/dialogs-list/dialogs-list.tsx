import React from "react";
import classes from 'src/ui/pages/messages-page/dialogs-list/dialog-list.module.css'
import DialogItem from "src/ui/pages/messages-page/dialogs-list/dialog-item/dialog-item";
import {DialogsData} from "src/redux/reducers/messages/messages.types";

type Props = {
  dialogsData: DialogsData
}

const DialogsList: React.FC<Props> = (props) => {
  let dialogItems =
    props.dialogsData.dialogStateItems.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);

  return (
    <div className={classes.dialogsBlock}>
      {dialogItems}
    </div>
  )
};

export default DialogsList;
