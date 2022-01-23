import {NavLink, Outlet} from "react-router-dom";

import React from 'react';

import './Layout.css'

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/users">USERS</NavLink>
                <NavLink to="/posts">POSTS</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;