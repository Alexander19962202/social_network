import './App.css';
import HeaderContainer from "./ui/Header/HeaderContainer";
import NavBar from "./ui/NavBar/NavBar";
import ProfileContainer from "./ui/Modules/Profile/ProfileContainer";
import Messages from "./ui/Modules/Messages/Messages";
import News from "./ui/Modules/News/News";
import Music from "./ui/Modules/Music/Music";
import Settings from "./ui/Modules/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom'
import React from "react";
import UsersContainer from "./ui/Modules/Users/UsersContainer";
import LoginDialog from "./ui/LoginDialog/LoginDialog";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <NavBar />
                <div className='app-wrapper-content'>
                    <Route path='/login' render={ () => <LoginDialog/> }/>
                    <Route path='/profile/:userID?' render={ () => <ProfileContainer /> }/>
                    <Route path='/messages' render={ () => <Messages /> }/>
                    <Route path='/news' render={ () => <News /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings /> }/>
                    <Route path='/users' render={ () => <UsersContainer /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
