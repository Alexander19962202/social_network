import './App.css';
import HeaderContainer from "./ui/Header/HeaderContainer";
import NavBar from "./ui/NavBar/NavBar";
import News from "./ui/Modules/News/News";
import Music from "./ui/Modules/Music/Music";
import Settings from "./ui/Modules/Settings/Settings";
import {HashRouter, Route, withRouter} from "react-router-dom";
import React from "react";
import UsersContainer from "./ui/Modules/Users/UsersContainer";
import LoginDialog from "./ui/LoginDialog/LoginDialog";
import Preloader from "./ui/widgets/Preloader";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import store from "./redux/redux-store";
import {withSuspense} from "./HOC/withSuspense";

let ProfileContainer = React.lazy(() => import('./ui/Modules/Profile/ProfileContainer'));
let Messages = React.lazy(() => import('./ui/Modules/Messages/Messages'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/login' render={() => <LoginDialog/>}/>
                    <Route path='/profile/:userID?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/messages' render={withSuspense(Messages)}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

let SocialNetworkApp = (props) => {
    return <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
};

export default SocialNetworkApp;