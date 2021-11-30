import React from "react";
import Preloader from "../ui/widgets/Preloader"

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />} >
            <Component {...props} />
        </React.Suspense>
    };
};