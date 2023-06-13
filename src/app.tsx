import './app.css';
import HeaderContainer from "./ui/header/header.container";
import NavBar from "./ui/nav-bar/nav-bar";
import NewsPage from "./ui/pages/news-page/news-page";
import MusicPage from "./ui/pages/music-page/music-page";
import SettingsPage from "./ui/pages/settings-page/settings-page";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import React from "react";
import UsersPageContainer from "src/ui/pages/users-page/users-page.container";
import Preloader from "./ui/common/components/preloader/preloader";
import {connect, ConnectedProps, Provider} from "react-redux";
import {initializeApp, resetGlobalError} from "./redux/reducers/app/app.thunks";
import store, {RootState} from "./redux/redux-store";
import {withSuspense} from "./ui/common/hoc/with-suspense";
import LoginDialogContainer from "src/ui/login-dialog/login-dialog.container";

let ProfilePage = React.lazy(() => import('./ui/pages/profile-page/profile-page.container'));
let MessagesPage = React.lazy(() => import('./ui/pages/messages-page/messages-page'));
let ProfileContainerWithSuspense = withSuspense(ProfilePage)
let MessagesWithSuspense = withSuspense(MessagesPage)

const mapStateToProps = (state: RootState) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError
});
const connector = connect(mapStateToProps, {initializeApp, resetGlobalError})
type Props = ConnectedProps<typeof connector>

class App extends React.Component<Props> {
  catchAllUnhandledErrors = () => {
    alert("Some error occured");
    //console.error(promiseRejectionEvent);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentDidUpdate() {
    if (this.props.globalError !== '')
      setTimeout(() => {
        this.props.resetGlobalError()
      }, 5000);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer errorMessage={this.props.globalError}/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Navigate to={"/profile"}/>}/>
            <Route path='/login' element={<LoginDialogContainer/>}/>
            <Route path='/profile' element={<ProfileContainerWithSuspense/>}/>
            <Route path='/profile/:userID' element={<ProfileContainerWithSuspense/>}/>
            <Route path='/messages' element={<MessagesWithSuspense/>}/>
            <Route path='/news' element={<NewsPage/>}/>
            <Route path='/music' element={<MusicPage/>}/>
            <Route path='/settings' element={<SettingsPage/>}/>
            <Route path='/users' element={<UsersPageContainer/>}/>
            <Route path='*' element={<div>404 NOT FOUND</div>}/>
          </Routes>
        </div>
      </div>
    );
  }
}

let AppContainer = connector(App);

let SocialNetworkApp = () => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
};

export default SocialNetworkApp;
