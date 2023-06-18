import 'src/app.css';
import HeaderContainer from './ui/header/header.container';
import NavBar from './ui/nav-bar/nav-bar';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import Preloader from './ui/common/components/preloader/preloader';
import { connect, ConnectedProps, Provider } from 'react-redux';
import { initializeApp } from 'src/redux/slices/app/app.thunks';
import store, { RootState } from './redux/redux-store';
import * as Sentry from '@sentry/react';
import FallbackPage from 'src/ui/common/components/fallback-page/fallback-page';

const mapStateToProps = (state: RootState) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError,
});
const connector = connect(mapStateToProps, { initializeApp });
type Props = ConnectedProps<typeof connector>;

const App = ({ initialized, initializeApp, globalError }: Props) => {
  useEffect(() => {
    initializeApp();
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer errorMessage={globalError} />
      <NavBar />
      <div className="app-wrapper-content">
        <Outlet />
      </div>
    </div>
  );
};

const AppContainer = connector(App);

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
