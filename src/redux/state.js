import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        myPostsData: [
            {id: 1, text: 'How I learned Infra Hard', likeCount: 11},
            {id: 2, text: 'How I learned Torba Black', likeCount: 22},
            {id: 3, text: 'About Gimbarr in 2011', likeCount: 33}
        ]
    },
    messagesPage: {
        dialogsData: [
            {name: 'Anna', id: 1, avatar: 'https://sun1-29.userapi.com/impg/Y9X9YzkWyEOVKaH2NVnmJrKylKzLRIfUB28JnQ/gXD5-qMHH0w.jpg?size=200x0&quality=96&crop=1,10,958,958&sign=71f65528b244b105da1fb5ecc7090381&ava=1'},
            {name: 'Valera', id: 2, avatar: ''},
            {name: 'Daniil', id: 3, avatar: 'https://sun1-23.userapi.com/impf/c849216/v849216145/1a1576/LrNK1E8o3fA.jpg?size=200x0&quality=96&crop=0,307,1201,1760&sign=0b6d760b4677bc3703c4c9fbf29fa8b3&ava=1\n'},
            {name: 'Sergey', id: 4, avatar: 'https://sun1-25.userapi.com/impf/c847221/v847221620/31d22/oMZqbXCsv6w.jpg?size=200x0&quality=96&crop=0,0,852,864&sign=0e8b10795b5d86f97c7eaa35b7ef5999&ava=1'},
            {name: 'Andrey', id: 5, avatar: 'https://sun1-17.userapi.com/impf/c630919/v630919478/2e6de/2n3IEqnIAoM.jpg?size=200x0&quality=96&crop=0,0,1435,2160&sign=b536f34d5d00b1a31da59dc593278cff&ava=1\n'},
            {name: 'Kirill', id: 6, avatar: 'https://sun1-92.userapi.com/impf/c852120/v852120846/10c3d2/dFD_PGJcGgo.jpg?size=200x0&quality=96&crop=0,406,1218,1218&sign=4175943873740892fcaddb0c0f1a533c&ava=1'}
        ],
        messagesData: [
            {message: 'Hello!'},
            {message: 'Hi!'},
            {message: 'How are you?'},
            {message: 'Good!!!'}
        ]
    },
    newsPage: {

    },
    musicPage: {

    },
    settingsPage: {

    },
    sideBar: {}
}

export let addPost = (text) => {
    let newPost = {
        id: 4,
        text: text,
        likeCount: 0
    };

    state.profilePage.myPostsData.push(newPost);
    rerenderEntireTree(state);
}

export let sendMessage = (message) => {
    let newMessage = { message: message };

    state.messagesPage.messagesData.push(newMessage);
    rerenderEntireTree(state);
}

export default state;

