import 'src/app.scss';
import * as Sentry from '@sentry/react';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {Outlet} from 'react-router-dom';

import { appStateIsInitialized } from 'src/store/slices/app/app.selectors';
import { initializeApp } from 'src/store/slices/app/app.thunks';
import store, { AppDispatch } from 'src/store/store';
import FallbackPage from 'src/ui/common/components/fallback-page/fallback-page';
import Preloader from 'src/ui/common/components/preloader/preloader';
import HeaderContainer from 'src/ui/header/header.container';
import NavBar from 'src/ui/nav-bar/nav-bar';

const App: React.FC = () => (
  <div className="app">
    <HeaderContainer />
    <div className="app__content">
      <NavBar />
      <div className="app__content-page">
        <Outlet />
      </div>
    </div>
  </div>
);

const AppContainer: React.FC = () => {
  const initialized = useSelector(appStateIsInitialized);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return <App />;
};

const SocialNetworkApp = () => (
  <Provider store={store}>
    <Sentry.ErrorBoundary
      fallback={({ resetError, error }) => <FallbackPage error={error} resetError={resetError} />}
      showDialog
    >
      <AppContainer />
    </Sentry.ErrorBoundary>
  </Provider>
);

export default SocialNetworkApp;
