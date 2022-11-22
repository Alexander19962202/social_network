import {getAuthUserData} from "./auth_reducer";

const APP_KEY = 'APP/';
const INITIALIZED_SUCCESS = APP_KEY + 'INITIALIZED_SUCCESS';
const SET_GLOBAL_ERROR_MESSAGE = APP_KEY + 'SET_GLOBAL_ERROR_MESSAGE';

let initialState = {
    initialized: false,
    globalError: ''
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case SET_GLOBAL_ERROR_MESSAGE:
            return {
                ...state,
                globalError: action.error
            }

        default:
            return state;
    }
};

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const setGlobalError = (error) => ({type: SET_GLOBAL_ERROR_MESSAGE, error})

export const resetGlobalError = () => (dispatch) => {
    dispatch(setGlobalError(''));
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //dispatch(somethingelse());
    //dispatch(somethingelse());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};

export default appReducer;