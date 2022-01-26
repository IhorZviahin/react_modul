import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";

const UserAlbums = () => {
    let {id} = useParams();
    const [album, setalbum] = useState(null);

    useEffect((id) => {
        userService.getByalbums(id).then(value => setalbum({...value}))
    }, [id])
    return (
        <div>
            <div>
                {
                    album && (
                        <div>
                            <div>{album.id}</div>
                            <div> userId: {album.userId}</div>
                            <div> title: {album.title}</div>
                            <Link to={`${id}/photos`}>
                                <button>photos</button>
                            </Link>
                        </div>
                    )
                }

            </div>
            <Outlet/>
        </div>
    );
};

export default UserAlbums;