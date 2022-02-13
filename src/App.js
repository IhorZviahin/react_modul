import {Routes, Route} from "react-router-dom"

import './App.css';
import Header from "./Components/Header/Header";
import NotFoundPage from './pages/NotFoundPade/NotFoundPade'
import MoviesPage from "./pages/Movies/MoviesPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import MovieDetailsPage from "./pages/MovieDetalisPage/MovieDetailsPage";
import FormSearchPage from "./pages/FormSearchPage/FormSearchPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Header/>}>

                <Route index element={<MoviesPage/>}/>
                <Route path={':id'} element={<MovieDetailsPage/>}/>
                <Route path={'GenreBadge'} element={<GenrePage/>}/>
                <Route path={'SearchMovies'} element={<FormSearchPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;
