// ----- ACTION TYPES -----
export type SEND_MESSAGE_TYPE = 'MESSAGES/SEND_MESSAGE';

// ----- ACTION TYPE CONSTS -----
export const SEND_MESSAGE: SEND_MESSAGE_TYPE = 'MESSAGES/SEND_MESSAGE';

// ----- ACTIONS/THUNKS -----
export type SendMessageAction = { type: SEND_MESSAGE_TYPE, messageText: string }
export type MessagesAction = SendMessageAction
// ----- STATE TYPES -----
export type DialogStateItem = {
  id: number,
  name: string,
  avatar: string
}

export type DialogsData = {
  dialogStateItems: DialogStateItem[]
}

export type MessageStateItems = {
  id: number,
  message: string
}

export type MessagesData = {
  messageStateItems: MessageStateItems[]
}

export type MessagesPageData = {
  dialogsData: DialogsData,
  messagesData: MessagesData
}

export type MessagesState = {
  messagesPageData: MessagesPageData
}
