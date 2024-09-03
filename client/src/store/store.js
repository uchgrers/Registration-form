import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from "./authReducer";
import {thunk as thunkMiddleware} from 'redux-thunk';
import {usersReducer} from "./usersReducer";

const reducers = {
    authReducer,
    usersReducer
}

const initialState = {

}

const store = configureStore({
    reducer: reducers,
    preloadedState: initialState,
    middleware: () => [thunkMiddleware]
})

export default store;

window.store = store;