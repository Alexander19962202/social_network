import React from "react";
import classes from './DialogsBlock.module.css'
import Dialog from "./Dialog/Dialog";
import Redirect from "react-router-dom/es/Redirect";

const DialogsBlock = (props) => {
    let dialogItems =
        props.dialogsData.dialogStateItems.map(d => <Dialog name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);

    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={classes.dialogsBlock}>
            {dialogItems}
        </div>
    )
};

export default DialogsBlock;