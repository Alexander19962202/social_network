import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './News.module.css' or its corr... Remove this comment to see the full error message
import classes from './News.module.css'

const News = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>News</div>
    );
}

export default News;