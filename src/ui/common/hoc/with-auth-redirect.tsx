import React from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";

type Props = {
  isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootState): Props => ({
  isAuth: state.auth.authUserData.isAuth
});

const withAuthRedirect = (Component: any) => {
  class RedirectComponent extends React.Component<Props> {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to='/login'/>
      }
      return <Component {...this.props}/>
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

export default withAuthRedirect;
