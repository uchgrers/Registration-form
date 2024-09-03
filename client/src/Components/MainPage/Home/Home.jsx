import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import Header from "../Header/Header";
import s from './Home.module.css';
import {getUsersFromServer} from "../../../store/usersReducer";
import Users from "../Users/Users";
import {selectPageParams} from "../../../common/selectors/homePageSelector";

const Home = () => {

    const dispatch = useDispatch();
    const pageSize = useSelector(state => selectPageParams(state).pageSize);
    const page = useSelector(state => selectPageParams(state).page);
    const isAuth = useSelector(state => state.authReducer.isAuth);

    useEffect(() => {
        dispatch(getUsersFromServer(pageSize, page))
    }, [page])

    return (
        isAuth ? <div className={s.homePageWrapper}>
            <Header/>
            <Users/>
        </div> : <Navigate to='/login'/>
    );
};

export default Home;