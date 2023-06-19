import { SEND_MESSAGE, SendMessageAction } from 'src/redux/slices/messenger/old/messages.types';

export const sendMessage = (messageText: string): SendMessageAction => ({ type: SEND_MESSAGE, messageText });
