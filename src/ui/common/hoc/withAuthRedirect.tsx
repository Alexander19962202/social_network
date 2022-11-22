import React from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.authUserData.isAuth
});

const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component {
        render() {
            // @ts-expect-error TS(2339): Property 'isAuth' does not exist on type 'Readonly... Remove this comment to see the full error message
            if (!this.props.isAuth) return <Navigate to='/login' />

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;