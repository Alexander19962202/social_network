import 'src/app.css';
import NavBar from 'src/ui/nav-bar/nav-bar';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import Preloader from 'src/ui/common/components/preloader/preloader';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { initializeApp } from 'src/store/slices/app/app.thunks';
import store, { AppDispatch } from 'src/store/store';
import * as Sentry from '@sentry/react';
import FallbackPage from 'src/ui/common/components/fallback-page/fallback-page';
import HeaderContainer from 'src/ui/header/header.container';
import { appStateIsInitialized } from 'src/store/slices/app/app.selectors';

const App: React.FC = () => (
  <div className="app">
    <HeaderContainer />
    <div className="app-content">
      <NavBar />
      <div className="app-content-page">
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

const SocialNetworkApp = () => {
  return (
    <Provider store={store}>
      <Sentry.ErrorBoundary fallback={({ resetError }) => <FallbackPage resetError={resetError} />} showDialog>
        <AppContainer />
      </Sentry.ErrorBoundary>
    </Provider>
  );
};

export default SocialNetworkApp;
