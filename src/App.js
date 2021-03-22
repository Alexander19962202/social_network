import './App.css';
import Header from "./ui/Header/Header";
import NavBar from "./ui/NavBar/NavBar";
import Profile from "./ui/Profile/Profile";
import Messages from "./ui/Messages/Messages";
import News from "./ui/News/News";
import Music from "./ui/Music/Music";
import Settings from "./ui/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom'
import React from "react";
import UsersContainer from "./ui/Users/UsersContainer";

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
