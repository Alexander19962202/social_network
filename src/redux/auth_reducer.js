import {authAPI, securityAPI} from "../Api/Api";
import {stopSubmit} from "redux-form";

const AUTH_KEY = 'AUTH/';
const SET_AUTH_USER_DATA = AUTH_KEY + 'SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = AUTH_KEY + 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    authUserData: {
        id: null,
        login: null,
        email: null,
        isAuth: false,
        captchaURL: null
    }
};

const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                authUserData: {...action.authUserData}
            }
        }
        default:
            return state;
    }
};

const setAuthUserDataSuccess = (authUserData, isAuth) => ({ type: SET_AUTH_USER_DATA, authUserData: {...authUserData, isAuth}});
const getCaptchaUrlSuccess = (captchaURL) => ({
    type: GET_CAPTCHA_URL_SUCCESS, authUserData: {captchaURL}
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.resultCode === 0)
        dispatch(setAuthUserDataSuccess(response.data, true));
};

export const login = (email, password, rememberMe, captcha) => async  (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0)
        dispatch(getAuthUserData())
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("Login", {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if(response.data.resultCode === 0)
        dispatch(setAuthUserDataSuccess({}, false));
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default auth_reducer;