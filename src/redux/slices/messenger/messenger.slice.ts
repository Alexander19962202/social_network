import { initialState } from 'src/redux/slices/messenger/messenger.initial-state';
import { createSlice } from '@reduxjs/toolkit';

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    sendMessage(state, action: { payload: { message: string } }) {
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
