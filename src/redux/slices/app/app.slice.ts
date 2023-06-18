import { initialState } from 'src/redux/slices/app/app.initial-state';
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appInitialized(state) {
      state.initialized = true;
    },
    setGlobalErrorMessage(state, action: { payload: { error: string } }) {
      state.globalError = action.payload.error;
    },
    resetGlobalErrorMessage(state) {
      state.globalError = '';
    },
  },
});
export const { appInitialized, setGlobalErrorMessage, resetGlobalErrorMessage } = appSlice.actions;

export default appSlice.reducer;
