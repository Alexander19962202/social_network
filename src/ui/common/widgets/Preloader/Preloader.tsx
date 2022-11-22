import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './Preloader.module.css' or its... Remove this comment to see the full error message
import classes from './Preloader.module.css'
// @ts-expect-error TS(2307): Cannot find module '../../../../assets/images/prel... Remove this comment to see the full error message
import preloader from '../../../../assets/images/preloader.svg'

let Preloader = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={classes.preloader}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img src={preloader}/>
        </div>
    )
};

export default Preloader;