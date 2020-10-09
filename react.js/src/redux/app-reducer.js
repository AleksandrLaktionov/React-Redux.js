import {
    getAuthUserData
} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// export type InitialStateType = {
//     initialized: boolean,
// }

let initialState = {
    initialized: false,
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
}

// export type InitializedSuccessType = {
//     type: typeof INITIALIZED_SUCCESS,
// }

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;