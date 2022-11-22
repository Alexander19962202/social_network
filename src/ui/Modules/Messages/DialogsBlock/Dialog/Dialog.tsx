import React from "react"
// @ts-expect-error TS(2307): Cannot find module './Dialog.module.css' or its co... Remove this comment to see the full error message
import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props: any) => {
    let path = '/messages/' + props.id;
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={classes.dialog}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img src={props.avatar}/>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Dialog;