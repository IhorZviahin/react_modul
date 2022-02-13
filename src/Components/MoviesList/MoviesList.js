import React from 'react';

import "./MovieList.css"
import {Link} from "react-router-dom";

const MoviesList = ({movie: {id, original_title, overview, poster_path}}) => {
    return (
        <div className={'MoviesList'}>
            <div className={'MoviesList_img'}>
                <img src= {`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/></div>
            <h2>{original_title}</h2>
            <div>{overview}</div>

            <Link to={`${id}`}>
                <button>More</button>
            </Link>
        </div>
    );
};

export default MoviesList;