const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const messagesPage_reducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.messagesPageData.messagesData.newMessageText = action.newMessageTextValue;
            return state;
        case SEND_MESSAGE:
            let newMessage = {message: state.messagesPageData.messagesData.newMessageText};
            state.messagesPageData.messagesData.messageStateItems.push(newMessage);
            state.messagesPageData.messagesData.newMessageText = '';
            return state
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (newText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageTextValue: newText })

export default messagesPage_reducer;