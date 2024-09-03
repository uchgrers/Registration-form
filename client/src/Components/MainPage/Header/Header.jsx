import React, {useState} from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {logoutUserTC} from "../../../store/authReducer";
import Preloader from "../../Preloader/Preloader";

const Header = () => {
    const [loggingOut, setLoggingOut] = useState(false);
    const dispatch = useDispatch();
    const id = useSelector(state => state.authReducer.id);
    const userEmail = useSelector(state => state.authReducer.email)
    const logout = () => {
        setLoggingOut(true);
        dispatch(logoutUserTC(id));
    }

    return (
        <header className={s.header}>
            <div className={s.headerElement}>{userEmail}</div>
            <div className={s.headerElement}>
                <button onClick={logout}>
                    {loggingOut ? <Preloader/> : 'Logout'}
                </button>
            </div>
        </header>
    );
};

export default Header;