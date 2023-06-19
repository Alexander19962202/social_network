import { Action } from 'redux';

// ----- ACTION TYPES -----
export type SEND_MESSAGE_TYPE = 'MESSAGES/SEND_MESSAGE';

// ----- ACTION TYPE CONSTS -----
export const SEND_MESSAGE: SEND_MESSAGE_TYPE = 'MESSAGES/SEND_MESSAGE';

// ----- ACTIONS/THUNKS -----
export type SendMessageAction = Action<SEND_MESSAGE_TYPE> & { messageText: string };
export type MessagesAction = SendMessageAction;
