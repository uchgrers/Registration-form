import React from 'react';
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../../store/authReducer";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const authError = useSelector(state => state.authReducer.authError);
    const isAuth = useSelector(state => state.authReducer.isAuth);

    const onSubmit = (data) => {
        dispatch(authUser(data.email, data.password, 'login'))
    }
    return (
        <Login isAuth={isAuth}
               authError={authError}
               onSubmit={onSubmit}
        />
    );
};

export default LoginContainer;