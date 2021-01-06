import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {name: 'Anna', id: 1},
    {name: 'Valera', id: 2},
    {name: 'Daniil', id: 3},
    {name: 'Sergey', id: 4},
    {name: 'Andrey', id: 5},
    {name: 'Boris', id: 6}
];
let messagesData = [
    {message: 'Hello!'},
    {message: 'Hi!'},
    {message: 'How are you?'},
    {message: 'Good!!!'}
];
let myPostsData = [
    {text: 'How I learned Infra Hard', likeCount: 11},
    {text: 'How I learned Torba Black', likeCount: 22},
    {text: 'About Gimbarr in 2011', likeCount: 33}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} myPostsData={myPostsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
