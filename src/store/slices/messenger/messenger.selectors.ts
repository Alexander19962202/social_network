import { RootState } from 'src/store/store';

export const messengerStateMessages = (state: RootState) => state.messenger.messages;
export const messengerStateDialogs = (state: RootState) => state.messenger.dialogs;
