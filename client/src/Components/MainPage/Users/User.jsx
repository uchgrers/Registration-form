import React from 'react';
import s from './Users.module.css';

const User = (props) => {
    const userIsAuth = props.isAuth ? 'Авторизован' : 'Не авторизован';
    return (
        <div className={s.user}>
            {props.id + 1 + '. ' + props.email + ' '}
            <span>{userIsAuth}</span>
        </div>
    );
};

export default User;