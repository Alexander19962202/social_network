import { initialState } from 'src/redux/slices/messenger/messenger.initial-state';
import { MessagesAction, SEND_MESSAGE } from 'src/redux/slices/messenger/old/messages.types';

class MessagesState {}

const messagesReducer = (state = initialState, action: MessagesAction): MessagesState => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let text = action.messageText;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: text }],
      };
    }
    default: {
      return state;
    }
  }
};

export default messagesReducer;
