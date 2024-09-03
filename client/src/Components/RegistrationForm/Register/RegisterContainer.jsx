import React from 'react';
import Register from "./Register";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../../store/authReducer";

const RegisterContainer = () => {

    const dispatch = useDispatch();
    const registrationError = useSelector(state => state.authReducer.registrationError);
    const isAuth = useSelector(state => state.authReducer.isAuth);

    const onSubmit = data => {
        dispatch(authUser(data.email, data.password, 'register'));
    }

    return (
        <Register isAuth={isAuth}
                  onSubmit={onSubmit}
                  registrationError={registrationError}
        />
    );
};

export default RegisterContainer;