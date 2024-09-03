import {loginUser, logoutUser} from "../API/api";

const AUTH_USER = 'REGISTER-USER';
const SET_AUTH_ERROR_MESSAGE = 'SET-AUTH-ERROR-MESSAGE';
const SET_REGISTRATION_ERROR_MESSAGE = 'SET-REGISTRATION-ERROR-MESSAGE';

const initialState = {
    email: null,
    password: null,
    id: null,
    isAuth: false,
    registrationError: null,
    authError: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            console.log(action)
            return {
                ...state,
                email: action.email,
                password: action.password,
                id: action.id,
                isAuth: action.isAuth,
                authError: null,
                registrationError: null
            }
        case SET_AUTH_ERROR_MESSAGE:
            return {
                ...state,
                authError: action.errorMessage
            }
        case SET_REGISTRATION_ERROR_MESSAGE:
            return {
                ...state,
                registrationError: action.errorMessage
            }
        default:
            return state
    }
}

export const setUserData = (email, password, id, isAuth) => ({type: AUTH_USER, email, password, id, isAuth});
export const setAuthError = (errorMessage) => ({type: SET_AUTH_ERROR_MESSAGE, errorMessage});
export const setRegistrationError = (errorMessage) => ({type: SET_REGISTRATION_ERROR_MESSAGE, errorMessage});

export const authUser = (email, password, type) => (dispatch) => {
    console.log(type)
    loginUser(email, password, type)
        .then(data => {
            console.log(data)
            if (data.statusCode === 0) {
                dispatch(setUserData(email, password, data.userData.id, true))
            } else {
                switch (type) {
                    case 'register':
                        dispatch(setRegistrationError(data.messages[0]))
                        break
                    case 'login':
                        dispatch(setAuthError(data.messages[0]))
                        break
                }
            }
        })
}

export const logoutUserTC = id => dispatch => {
    console.log('logout thunk creator')
    logoutUser(id)
        .then((data) => {
            console.log(data)
            console.log('dispatching nulls')
            dispatch(setUserData(null, null, null, false))
        })
}