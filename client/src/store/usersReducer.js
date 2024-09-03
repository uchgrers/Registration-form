import {getUsers} from "../API/api";

const initialState = {
    users: [],
    pageParams: {
        pageSize: 10,
        page: 1
    }
}

const SET_USERS = 'SET-USERS';

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

const setUsers = (users) => ({type: SET_USERS, users})

export const getUsersFromServer = (pageSize, page) => (dispatch) => {
    getUsers(pageSize, page)
        .then(data => {
            console.log(data)
            dispatch(setUsers(data.users))
        })
}