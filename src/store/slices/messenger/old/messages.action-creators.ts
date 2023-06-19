import { SEND_MESSAGE, SendMessageAction } from 'src/store/slices/messenger/old/messages.types';

export const sendMessage = (messageText: string): SendMessageAction => ({ type: SEND_MESSAGE, messageText });
