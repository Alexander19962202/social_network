import React from "react";
// @ts-expect-error TS(2307): Cannot find module './DialogsBlock.module.css' or ... Remove this comment to see the full error message
import classes from './DialogsBlock.module.css'
import Dialog from "./Dialog/Dialog";

const DialogsBlock = (props: any) => {
    let dialogItems =
        props.dialogsData.dialogStateItems.map((d: any) => <Dialog name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);

    return (
        <div className={classes.dialogsBlock}>
            {dialogItems}
        </div>
    )
};

export default DialogsBlock;