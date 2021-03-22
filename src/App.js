import './App.css';
import Header from "./ui/Header/Header";
import NavBar from "./ui/NavBar/NavBar";
import Profile from "./ui/Modules/Profile/Profile";
import Messages from "./ui/Modules/Messages/Messages";
import News from "./ui/Modules/News/News";
import Music from "./ui/Modules/Music/Music";
import Settings from "./ui/Modules/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom'
import React from "react";
import UsersContainer from "./ui/Modules/Users/UsersContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <NavBar />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile /> }/>
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
