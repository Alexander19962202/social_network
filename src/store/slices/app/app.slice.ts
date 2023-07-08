import { createSlice } from '@reduxjs/toolkit';

import { initialState } from 'src/store/slices/app/app.initial-state';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appInitialized(state) {
      state.initialized = true;
    },
  },
});
export const { appInitialized } = appSlice.actions;

export default appSlice.reducer;
