import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'src/redux/redux-store';

let mapStateToPropsForRedirect = (state: RootState) => ({
  isAuth: state.auth.authUserData.isAuth,
});

const connector = connect(mapStateToPropsForRedirect);
export type WithAuthRedirectProps = ConnectedProps<typeof connector>;

function withAuthRedirect(WrappedComponent: React.ComponentType<any>) {
  const RedirectComponent: React.FC<React.ComponentProps<typeof WrappedComponent> & WithAuthRedirectProps> = props => {
    if (!props.isAuth) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...(props as any)} />;
  };

  return connector(RedirectComponent);
}

export default withAuthRedirect;
