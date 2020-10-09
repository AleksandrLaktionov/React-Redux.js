import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';


const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

// export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

// export type setAuthUserDataActionPayloadType = {
//     id: number | null,
//     email: string | null,
//     login: string | null,
//     isAuth: boolean,
// }

// export type setAuthUserDataActionType = {
//     type: typeof SET_USER_DATA,
//     payload: setAuthUserDataActionPayloadType

// }

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        email,
        login,
        isAuth
    }
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {
            id,
            email,
            login
        } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, remerberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, remerberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Sume error";
        dispatch(stopSubmit("login", {
            _error: message
        }))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;