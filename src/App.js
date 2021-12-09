import './App.css';
import HeaderContainer from "./ui/Header/HeaderContainer";
import NavBar from "./ui/NavBar/NavBar";
import News from "./ui/Modules/News/News";
import Music from "./ui/Modules/Music/Music";
import Settings from "./ui/Modules/Settings/Settings";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import React from "react";
import UsersContainer from "./ui/Modules/Users/UsersContainer";
import LoginDialog from "./ui/LoginDialog/LoginDialog";
import Preloader from "./ui/common/widgets/Preloader/Preloader";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp, resetGlobalError} from "./redux/reducers/app_reducer";
import store from "./redux/redux-store";
import {withSuspense} from "./HOC/withSuspense";

let ProfileContainer = React.lazy(() => import('./ui/Modules/Profile/ProfileContainer'));
let Messages = React.lazy(() => import('./ui/Modules/Messages/Messages'));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.globalError !== '')
            setTimeout(() => { this.props.resetGlobalError() },5000);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        debugger
        return (
            <div className="app-wrapper">
                <HeaderContainer errorMessage={this.props.globalError}/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/login' render={() => <LoginDialog/>}/>
                        <Route path='/profile/:userID?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/messages' render={withSuspense(Messages)}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, resetGlobalError}))
(App);

let SocialNetworkApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
};

export default SocialNetworkApp;