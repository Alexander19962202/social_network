import {getAuthUserData} from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
};


const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    debugger
    let promise = dispatch(getAuthUserData());
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise])
        .then(() => {
            debugger
            dispatch(initializedSuccess());
        });
};

export default appReducer;