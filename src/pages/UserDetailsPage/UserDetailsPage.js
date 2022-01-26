import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";

const UserDetailsPage = () => {
    let {id} = useParams();
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        userService.getById(id).then(value => setUserDetails({...value}))
    }, [id])
    return (
        <div>
            <div>
                {
                    userDetails && (
                        <div>
                            <div>{userDetails.id}</div>
                            <div> Name: {userDetails.name}</div>
                            <div> Username: {userDetails.username}</div>
                            <div> Email: {userDetails.email}</div>
                            <Link to={`/users/${id}/posts`}>
                                <button>GetPost</button>
                            </Link>
                        </div>
                    )
                }
            </div>

            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;