import React from "react";
// @ts-expect-error TS(2307): Cannot find module './MessagesBlock.module.css' or... Remove this comment to see the full error message
import classes from './MessagesBlock.module.css'
// @ts-expect-error TS(6142): Module './Message/Message' was resolved to '/home/... Remove this comment to see the full error message
import Message from "./Message/Message";
// @ts-expect-error TS(6142): Module './MessagesField/MessagesField' was resolve... Remove this comment to see the full error message
import MessagesField from "./MessagesField/MessagesField";

const MessagesBlock = (props: any) => {

    let messageItems =
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        props.messagesData.messageStateItems.map((m: any) => <Message message={m.message} id={m.id} key={m.id}/>);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={classes.messageBlock}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                {messageItems}
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <MessagesField on_sendMessage={props.sendMessage}/>
        </div>
    );
};

export default MessagesBlock;