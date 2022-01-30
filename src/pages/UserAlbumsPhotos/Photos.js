import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import "./Photo.css"

const Photos = () => {
    let {id} = useParams();
    const [photo, setphoto] = useState(null);

    useEffect(() => {
        albumService.getByphotosid(id).then(value => setphoto(value))
    }, [id])
    console.log(photo)
    return (
        <div>
            {
                photo &&
                (<div className={"photo"}>
                    <div>
                        <div>{photo.id}</div>
                        <div>{photo.title}</div>
                    </div>
                    <div><img src={`${photo.url}`}/></div>
                </div>)
            }
        </div>
    );
};

export default Photos;