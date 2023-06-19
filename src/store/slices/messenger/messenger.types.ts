export type Dialog = {
  id: number;
  name: string;
  avatar: string;
};

export type Message = {
  id: number;
  message: string;
};

export type MessagesState = {
  messages: Message[];
  dialogs: Dialog[];
};
