import React, {useEffect, useState} from 'react';
import "./MoviesPage.css"
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store";
import MoviesList from "../../Components/MoviesList/MoviesList";


const MoviesPage = () => {

    const {movies, status, actions, error} = useSelector(state => state['moviesReduser']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies())
    }, [])


    console.log(movies)
    return (

        <div className={'Movies_wrapper'}>
            {status === 'pending' && <h1>Loaging</h1>}
            {error && <h2>{`${error}`}</h2>}
            {movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)}


        </div>
    );
};

export default MoviesPage;