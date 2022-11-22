import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './Music.module.css' or its cor... Remove this comment to see the full error message
import classes from './Music.module.css'

const Music = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>Music</div>
    );
}

export default Music;