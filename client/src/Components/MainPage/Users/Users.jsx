import React from 'react';
import {useSelector} from "react-redux";
import User from "./User";
import s from './Users.module.css';

const Users = () => {

    const users = useSelector(state => state.usersReducer.users).map(user => {
        return <User email={user.email} id={user.id} isAuth={user.isAuth} user={user}/>
    })

    return (
        <section className={s.usersWrapper}>
            <div className={s.usersTotalCount}><b>Users total count: {users.length}</b></div>
            {users}
        </section>
    );
};

export default Users;