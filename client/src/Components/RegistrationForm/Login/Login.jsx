import React from 'react';
import styles from "../Register/Register.module.css";
import {useForm} from "react-hook-form";
import {email, password} from "../../../common/registerParams";
import Submit from "../../Submit/Submit";
import Link from "../../Link/Link";
import {Navigate} from "react-router-dom";

const Login = (props) => {

    const {register, handleSubmit, formState: {errors}, clearErrors} = useForm();

    return (

        <form className={styles.form} onSubmit={handleSubmit(props.onSubmit)}>
            {props.isAuth && <Navigate to="/home"/>}
            <div className={styles.formField}>
                <input className={errors.email ? styles.inputError : styles.formFieldInput}
                       placeholder="Email"
                       type="text" {...register(email.name, email.params)}
                    onChange={() => clearErrors('email')}
                />
                {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
            </div>
            <div className={styles.formField}>
                <input className={errors.password ? styles.inputError : styles.formFieldInput}
                       placeholder="Password"
                       type="password" {...register(password.name, password.params)}
                       onChange={() => clearErrors('password')}
                />
                {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
            </div>
            <div className={styles.formSubmitBox}>
                <div className={styles.errorMessage}>{props.authError}</div>
                <Submit/>
                <Link action="Register" to="register"/>
            </div>
        </form>
    );
};

export default Login;