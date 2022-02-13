import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movie.service";
import MovieInfo from "../../Components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {
    let {id} = useParams();
    const [moviesDetails, setmoviesDetails] = useState();
    useEffect(() => {
        movieService.getMovieById(id).then(value => setmoviesDetails(value))
    }, [])
    console.log(moviesDetails)


    return (

        <div>
            {moviesDetails && (<MovieInfo key={moviesDetails.id} moviesDetails={moviesDetails}/>)}
        </div>
    );
};

export default MovieDetailsPage;