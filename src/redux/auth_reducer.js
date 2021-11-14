import {authAPI} from "../Api/Api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    authUserData: {
        id: null,
        login: null,
        email: null,
        isAuth: false
    }
};

const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                authUserData: {
                    ...state.authUserData,
                    id: action.authUserData.id,
                    login: action.authUserData.login,
                    email: action.authUserData.email,
                    isAuth: action.isAuth
                }
            }
        }
        default:
            return state;
    }
};

const setAuthUserDataSuccess = (authUserData, isAuth) => ({ type: SET_AUTH_USER_DATA, authUserData: authUserData, isAuth});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0)
                dispatch(setAuthUserDataSuccess(data.data, true));
        });
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password,rememberMe).then(response => {
            if(response.data.resultCode === 0)
                dispatch(getAuthUserData())
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0)
                dispatch(setAuthUserDataSuccess({}, false));
        })
    }
};

export default auth_reducer;