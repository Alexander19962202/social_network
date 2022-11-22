import {authAPI, securityAPI} from "../../api/Api";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
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

const auth_reducer = (state = initialState, action: any) => {
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

// @ts-expect-error TS(7006): Parameter 'authUserData' implicitly has an 'any' t... Remove this comment to see the full error message
const setAuthUserDataSuccess = (authUserData, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    authUserData: {...authUserData, isAuth}
});
const getCaptchaUrlSuccess = (captchaURL: any) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    authUserData: {captchaURL}
});

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.authMe();
    if (response.resultCode === 0)
        dispatch(setAuthUserDataSuccess(response.data, true));
};

export const login = (email: any, password: any, rememberMe: any, captcha: any) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();
    if(response.data.resultCode === 0)
        dispatch(setAuthUserDataSuccess({}, false));
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default auth_reducer;