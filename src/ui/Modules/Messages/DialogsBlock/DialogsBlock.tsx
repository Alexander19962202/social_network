import React from "react";
// @ts-expect-error TS(2307): Cannot find module './DialogsBlock.module.css' or ... Remove this comment to see the full error message
import classes from './DialogsBlock.module.css'
// @ts-expect-error TS(6142): Module './Dialog/Dialog' was resolved to '/home/al... Remove this comment to see the full error message
import Dialog from "./Dialog/Dialog";

const DialogsBlock = (props: any) => {
    let dialogItems =
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        props.dialogsData.dialogStateItems.map((d: any) => <Dialog name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={classes.dialogsBlock}>
            {dialogItems}
        </div>
    )
};

export default DialogsBlock;