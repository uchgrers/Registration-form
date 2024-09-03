import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../RegistrationForm/Register/Register.module.css'

const Link = (props) => {
    return (
        <div >
            {props.action} <NavLink className={styles.link} to={`/${props.to}`}>here</NavLink>
        </div>
    );
};

export default Link;