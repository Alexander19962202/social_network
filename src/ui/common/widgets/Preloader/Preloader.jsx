import React from 'react';
import classes from './Preloader.module.css'
import preloader from '../../../../assets/images/preloader.svg'

let Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader}/>
        </div>
    )
};

export default Preloader;