import React from 'react'
import {Navigate} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "src/redux/redux-store";

let mapStateToPropsForRedirect = (state: RootState) => ({
  isAuth: state.auth.authUserData.isAuth
});

const connector = connect(mapStateToPropsForRedirect)

export type WithAuthRedirectProps = ConnectedProps<typeof connector>

const withAuthRedirect = (Component: React.FC<any>) => {
  const RedirectComponent: React.FC<WithAuthRedirectProps> = (props) => {
    if (!props.isAuth) {
      return <Navigate to='/login'/>
    }
    return <Component {...props}/>
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

export default withAuthRedirect;
