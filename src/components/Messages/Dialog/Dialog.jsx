import React from "react"
import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={classes.dialog}>
            <div>
                <img src={props.avatar}/>
            </div>
            <div>
                <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Dialog;