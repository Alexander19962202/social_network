import React from 'react';
import { Navigate } from 'react-router-dom';
import { RootState } from 'src/store/store';
import { useSelector } from 'react-redux';

function withAuthRedirect(WrappedComponent: React.ComponentType<any>) {
  const RedirectComponent: React.FC<React.ComponentProps<typeof WrappedComponent>> = props => {
    const isAuth = useSelector((state: RootState) => state.auth.authUserData.isAuth);
    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };

  return RedirectComponent;
}

export default withAuthRedirect;
