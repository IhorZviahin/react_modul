import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const UserDetailsPage = () => {
    let {id} = useParams();
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        postService.getById(id).then(value => setUserDetails({...value}))
    }, [id])
    return (
        <div>
            <div>
                {
                    userDetails && (
                        <div>
                            <div>{userDetails.id}</div>
                            <div> Title: {userDetails.title}</div>
                            <div> Body: {userDetails.body}</div>
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