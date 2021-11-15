import './App.css';
import HeaderContainer from "./ui/Header/HeaderContainer";
import NavBar from "./ui/NavBar/NavBar";
import ProfileContainer from "./ui/Modules/Profile/ProfileContainer";
import Messages from "./ui/Modules/Messages/Messages";
import News from "./ui/Modules/News/News";
import Music from "./ui/Modules/Music/Music";
import Settings from "./ui/Modules/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';
import withRouter from "react-router-dom/es/withRouter";
import React from "react";
import UsersContainer from "./ui/Modules/Users/UsersContainer";
import LoginDialog from "./ui/LoginDialog/LoginDialog";
import Preloader from "./ui/widgets/Preloader";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app_reducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Route path='/login' render={() => <LoginDialog/>}/>
                        <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <Messages/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    connect(mapStateToProps, {initializeApp}))
(App);
