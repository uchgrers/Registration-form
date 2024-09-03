import React from 'react';
import {useForm} from "react-hook-form";
import styles from './Register.module.css';
import {confirmPassword, email, password} from "../../../common/registerParams";
import Submit from "../../Submit/Submit";
import Link from "../../Link/Link";
import {Navigate} from "react-router-dom";

const Register = (props) => {

    const {register, handleSubmit, watch, formState: {errors}, clearErrors} = useForm();

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
            <div className={styles.formField}>
                <input className={errors.confirmPassword ? styles.inputError : styles.formFieldInput}
                       placeholder="Confirm password"
                       type="password"
                       {...register(confirmPassword.name,
                           {...confirmPassword.params, validate: confirmPassword.validate(watch)})}
                       onChange={() => clearErrors('confirmPassword')}
                />
                {errors.confirmPassword && <p className={styles.errorMessage}>
                    {errors.confirmPassword.message}
                </p>}
            </div>
            <div className={styles.formSubmitBox}>
                <div className={styles.errorMessage}>{props.registrationError}</div>
                <Submit/>
                <Link action="Sign-in" to="login"/>
            </div>
        </form>
    );
};

export default Register;