import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './Messages.module.css' or its ... Remove this comment to see the full error message
import classes from './Messages.module.css'
// @ts-expect-error TS(6142): Module './DialogsBlock/DialogsBlockContainer' was ... Remove this comment to see the full error message
import DialogsBlockContainer from "./DialogsBlock/DialogsBlockContainer";
// @ts-expect-error TS(6142): Module './MessagesBlock/MessageBlockContainer' was... Remove this comment to see the full error message
import MessageBlockContainer from "./MessagesBlock/MessageBlockContainer"

const Messages = (props: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={classes.messages}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DialogsBlockContainer />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <MessageBlockContainer />
        </div>
    );
};

export default Messages;