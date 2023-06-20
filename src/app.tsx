import 'src/app.css';
import NavBar from 'src/ui/nav-bar/nav-bar';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import Preloader from 'src/ui/common/components/preloader/preloader';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { initializeApp } from 'src/store/slices/app/app.thunks';
import store, { AppDispatch, RootState } from 'src/store/store';
import * as Sentry from '@sentry/react';
import FallbackPage from 'src/ui/common/components/fallback-page/fallback-page';
import Header from 'src/ui/header/header';

const App = () => {
  const initialized = useSelector((state: RootState) => state.app.initialized);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <NavBar />
        <div className="app-content-page">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const SocialNetworkApp = () => {
  return (
    <Provider store={store}>
      <Sentry.ErrorBoundary fallback={({ resetError }) => <FallbackPage resetError={resetError} />} showDialog>
        <App />
      </Sentry.ErrorBoundary>
    </Provider>
  );
};

export default SocialNetworkApp;
