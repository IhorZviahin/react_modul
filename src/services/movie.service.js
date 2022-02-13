import {axiosService} from "./axios.service"
import {urls} from "../config/urls"

export const movieService = {
    // getAll:()=>axiosService.get(`discover/movie?page=1`).then(value => value.data),

    getAll:()=>axiosService.get(urls.movies).then(value => value.data.results),
    getMovieById:(id)=>axiosService.get(`${urls.movie}/${id}`).then(value => value.data)
}