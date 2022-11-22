import './App.css';
// @ts-expect-error TS(6142): Module './ui/Header/HeaderContainer' was resolved ... Remove this comment to see the full error message
import HeaderContainer from "./ui/Header/HeaderContainer";
// @ts-expect-error TS(6142): Module './ui/NavBar/NavBar' was resolved to '/home... Remove this comment to see the full error message
import NavBar from "./ui/NavBar/NavBar";
// @ts-expect-error TS(6142): Module './ui/Modules/News/News' was resolved to '/... Remove this comment to see the full error message
import News from "./ui/Modules/News/News";
// @ts-expect-error TS(6142): Module './ui/Modules/Music/Music' was resolved to ... Remove this comment to see the full error message
import Music from "./ui/Modules/Music/Music";
// @ts-expect-error TS(6142): Module './ui/Modules/Settings/Settings' was resolv... Remove this comment to see the full error message
import Settings from "./ui/Modules/Settings/Settings";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import React from "react";
// @ts-expect-error TS(6142): Module './ui/Modules/Users/UsersContainer' was res... Remove this comment to see the full error message
import UsersContainer from "./ui/Modules/Users/UsersContainer";
// @ts-expect-error TS(6142): Module './ui/LoginDialog/LoginDialog' was resolved... Remove this comment to see the full error message
import LoginDialog from "./ui/LoginDialog/LoginDialog";
// @ts-expect-error TS(6142): Module './ui/common/widgets/Preloader/Preloader' w... Remove this comment to see the full error message
import Preloader from "./ui/common/widgets/Preloader/Preloader";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp, resetGlobalError} from "./redux/reducers/app_reducer";
import store from "./redux/redux-store";
// @ts-expect-error TS(6142): Module './ui/common/hoc/withSuspense' was resolved... Remove this comment to see the full error message
import {withSuspense} from "./ui/common/hoc/withSuspense";

// @ts-expect-error TS(6142): Module './ui/Modules/Profile/ProfileContainer' was... Remove this comment to see the full error message
let ProfileContainer = React.lazy(() => import('./ui/Modules/Profile/ProfileContainer'));
// @ts-expect-error TS(6142): Module './ui/Modules/Messages/Messages' was resolv... Remove this comment to see the full error message
let Messages = React.lazy(() => import('./ui/Modules/Messages/Messages'));
let ProfileContainerWithSuspense = withSuspense(ProfileContainer)
let MessagesWithSuspense = withSuspense(Messages)

class App extends React.Component {
    catchAllUnhandledErrors = (reason: any, promise: any) => {
        alert("Some error occured");
        //console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        // @ts-expect-error TS(2339): Property 'initializeApp' does not exist on type 'R... Remove this comment to see the full error message
        this.props.initializeApp();
        // @ts-expect-error TS(2769): No overload matches this call.
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        // @ts-expect-error TS(2769): No overload matches this call.
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        // @ts-expect-error TS(2339): Property 'globalError' does not exist on type 'Rea... Remove this comment to see the full error message
        if (this.props.globalError !== '')
            setTimeout(() => {
                // @ts-expect-error TS(2339): Property 'resetGlobalError' does not exist on type... Remove this comment to see the full error message
                this.props.resetGlobalError()
            }, 5000);
    }

    render() {
        // @ts-expect-error TS(2339): Property 'initialized' does not exist on type 'Rea... Remove this comment to see the full error message
        if (!this.props.initialized) {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return <Preloader/>
        }
        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="app-wrapper">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <HeaderContainer errorMessage={this.props.globalError}/>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <NavBar/>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className='app-wrapper-content'>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Routes>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route exact path='/' element={<Navigate to={"/profile"}/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='/login' element={<LoginDialog/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='/profile' element={<ProfileContainerWithSuspense/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='/profile/:userID' element={<ProfileContainerWithSuspense/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='/messages' element={<MessagesWithSuspense/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='/news' element={<News/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='/music' element={<Music/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='/settings' element={<Settings/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='/users' element={<UsersContainer/>}/>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Route path='*' element={<div>404 NOT FOUND</div>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError
});

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp, resetGlobalError}))
(App);

let SocialNetworkApp = (props: any) => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <React.StrictMode>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <BrowserRouter>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Provider store={store}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
};

export default SocialNetworkApp;