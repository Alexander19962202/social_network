import { SEND_MESSAGE, SendMessageAction } from './messages.types';

export const sendMessage = (messageText: string): SendMessageAction => ({ type: SEND_MESSAGE, messageText });
