import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from 'src/store/slices/auth/auth.initial-state';
import { IAuthUserData } from 'src/store/slices/auth/auth.types';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUserData(state, action: PayloadAction<IAuthUserData>) {
      state.authUserData = action.payload;
    },
    setCaptchaURL(state, action: PayloadAction<{ captchaURL: string }>) {
      state.authUserData.captchaURL = action.payload.captchaURL;
    },
  },
});

export const { setAuthUserData, setCaptchaURL } = authSlice.actions;

export default authSlice.reducer;
