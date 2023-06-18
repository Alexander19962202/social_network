import { MessagesAction, MessagesState, SEND_MESSAGE } from './messages.types';
import { initialState } from './messages.initial-state';

const messagesReducer = (state = initialState, action: MessagesAction): MessagesState => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let text = action.messageText;
      return {
        ...state,
        messagesPageData: {
          ...state.messagesPageData,
          messagesData: {
            ...state.messagesPageData.messagesData,
            messageStateItems: [...state.messagesPageData.messagesData.messageStateItems, { id: 5, message: text }],
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default messagesReducer;
