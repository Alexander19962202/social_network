import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './Settings.module.css' or its ... Remove this comment to see the full error message
import classes from './Settings.module.css'

const Settings = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>Settings</div>
    );
};

export default Settings;