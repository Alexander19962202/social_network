import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'src/redux/slices/auth/auth.initial-state';
import { IAuthUserData } from 'src/redux/slices/auth/auth.types';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUserData(state, action: { payload: IAuthUserData }) {
      state.authUserData = action.payload;
    },
    setCaptchaURL(state, action: { payload: { captchaURL: string } }) {
      state.authUserData.captchaURL = action.payload.captchaURL;
    },
  },
});

export const { setAuthUserData, setCaptchaURL } = authSlice.actions;

export default authSlice.reducer;
