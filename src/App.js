import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom'
import React from "react";

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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
