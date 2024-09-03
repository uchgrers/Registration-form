import {getUsers} from "../API/api";

const initialState = {
    users: []
}

const SET_USERS = 'SET-USERS';

export const homePageReducer = (state = initialState, action) => {
    switch (action.type) {

    }
}

export const setUsers = (pageSize, page) => dispatch => {
    getUsers(pageSize, page)
        .then()
}