import React from 'react';

import "./Movieinfo.css"

const MovieInfo = ({moviesDetails: {original_title, overview, poster_path}}) => {
    return (

        <div>
            <h1>{original_title}</h1>
            <div className={'Info_block'}>
                <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/></div>
                <div>{overview}</div>
            </div>
        </div>
    );
};

export default MovieInfo;