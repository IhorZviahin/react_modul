import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
        <>
            <div className={'header'}>
                <NavLink to="/">Movies</NavLink>
                <NavLink to="GenreBadge">Genre</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Header;