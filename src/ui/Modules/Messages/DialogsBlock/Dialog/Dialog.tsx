import React from "react"
// @ts-expect-error TS(2307): Cannot find module './Dialog.module.css' or its co... Remove this comment to see the full error message
import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props: any) => {
    let path = '/messages/' + props.id;
    return (
        <div className={classes.dialog}>
            
            <div>
                
                <img src={props.avatar}/>
            </div>
            
            <div>
                
                <NavLink to={path} className={(navData) => navData.isActive ? classes.active : ''}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Dialog;