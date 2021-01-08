import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar siteBar={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> }/>
                    <Route path='/messages' render={ () => <Messages messagesPage={props.state.messagesPage} sendMessage={props.sendMessage} updateNewMessageText={props.updateNewMessageText}/> }/>
                    <Route path='/news' render={ () => <News newsPage={props.state.newsPage}/> }/>
                    <Route path='/music' render={ () => <Music musicPage={props.state.musicPage}/> }/>
                    <Route path='/settings' render={ () => <Settings settingsPage={props.state.settingsPage}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
