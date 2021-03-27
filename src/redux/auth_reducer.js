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
                    isAuth: true
                }
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (authUserData) => ({ type: SET_AUTH_USER_DATA, authUserData: authUserData });

export default auth_reducer;