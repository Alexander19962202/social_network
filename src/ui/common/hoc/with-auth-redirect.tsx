import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authStateIsAuth } from 'src/store/slices/auth/auth.selectors';

function withAuthRedirect(WrappedComponent: React.ComponentType<any>) {
  const RedirectComponent: React.FC<React.ComponentProps<typeof WrappedComponent>> = props => {
    const isAuth = useSelector(authStateIsAuth);
    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };

  return RedirectComponent;
}

export default withAuthRedirect;
