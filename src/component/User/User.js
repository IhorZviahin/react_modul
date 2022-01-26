import React from 'react';

import "./User.css"
import {Link} from "react-router-dom";


const User = ({user:{id,name,username,email}}) => {
    return (
        <div className={'user'}>
            <div> Id){id}</div>
            <div> name: {name}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>

            <Link to={id.toString()}> <button>GetUserInfo</button> </Link>

            <Link to={`${id}/albums`}>
                <button>albums</button>
            </Link>
        </div>
    );
};

export default User;