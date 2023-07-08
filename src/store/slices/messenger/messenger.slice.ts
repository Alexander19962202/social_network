import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from 'src/store/slices/messenger/messenger.initial-state';

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<{ message: string }>) {
      const lastId = state.messages?.at(-1)?.id ?? 0;
      state.messages = [
        ...state.messages,
        {
          id: lastId + 1,
          message: action.payload.message,
        },
      ];
    },
  },
});
export const { sendMessage } = messengerSlice.actions;

export default messengerSlice.reducer;
