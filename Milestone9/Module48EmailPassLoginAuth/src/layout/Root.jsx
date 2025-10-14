import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            {/* <h1>Hi, I am Root</h1> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;