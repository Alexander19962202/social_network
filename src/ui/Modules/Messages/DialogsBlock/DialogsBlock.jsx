import React from "react";
import classes from './DialogsBlock.module.css'
import Dialog from "./Dialog/Dialog";

const DialogsBlock = (props) => {
    let dialogItems =
        props.dialogsData.dialogStateItems.map(d => <Dialog name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);

    return (
        <div className={classes.dialogsBlock}>
            {dialogItems}
        </div>
    )
};

export default DialogsBlock;