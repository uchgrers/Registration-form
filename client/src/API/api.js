import axios from "axios"

export const loginUser = (email, password, type) => {
    return axios.post(
        'http://localhost:8000/users',
        {email, password, type: type},
        {withCredentials: true}
    )
        .then(response => {
            console.log(response)
            return response.data
        })
}

export const logoutUser = (id) => {
    return axios.put(
        'http://localhost:8000/users',
        {id},
        {withCredentials: true}
    )
        .then(response => {
            console.log(response)
            return response.data
        })
}

export const getUsers = (pageSize, page) => {
    return axios.get(
        `http://localhost:8000/users?count=${pageSize}&page=${page}`,
        {withCredentials: true}
    )
        .then(response => {
            console.log(response)
            return response.data
        })
}