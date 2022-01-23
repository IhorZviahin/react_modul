import React from 'react';

import "./User.css"


const User = ({user:{id, name, username, email}}) => {
    return (
        <div className={'user'}>
            <div> Id){id}</div>
            <div> name: {name}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>

            {/*<link to={id.toString()}><button>UserDetalil</button></link>*/}

        </div>
    );
};

export default User;