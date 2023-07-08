import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authStateIsAuth } from 'src/store/slices/auth/auth.selectors';

function withAuthRedirect(WrappedComponent: React.ComponentType) {
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
