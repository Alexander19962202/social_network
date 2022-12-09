import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './Preloader.module.css' or its... Remove this comment to see the full error message
import classes from './Preloader.module.css'
// @ts-expect-error TS(2307): Cannot find module '../../../../assets/images/prel... Remove this comment to see the full error message
import preloader from '../../../../assets/images/preloader.svg'

let Preloader = () => {
    return (
        <div className={classes.preloader}>
            
            <img src={preloader}/>
        </div>
    )
};

export default Preloader;