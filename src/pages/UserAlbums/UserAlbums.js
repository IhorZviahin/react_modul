import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";

const UserAlbums = () => {
    let {id} = useParams();
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        albumService.getByalbumsid(id).then(value => setAlbums(value))
    }, [id])
    console.log(albums)
    return (
        <div>
            <div>
                {
                    albums &&
                    (<div>
                        <div>{albums.id}</div>
                        <div>{albums.title}</div>
                        <Link to={`${id}/photos`}>
                            <button>photos</button>
                        </Link>
                    </div>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default UserAlbums;