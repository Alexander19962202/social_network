import React from "react";
// @ts-expect-error TS(6142): Module '../widgets/Preloader/Preloader' was resolv... Remove this comment to see the full error message
import Preloader from "../widgets/Preloader/Preloader"

export const withSuspense = (Component: any) => {
    return (props: any) => {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <React.Suspense fallback={<Preloader />} >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Component {...props} />
        </React.Suspense>
    };
};