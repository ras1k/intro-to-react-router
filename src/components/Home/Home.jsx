import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <h3>This is Home lol xx</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;