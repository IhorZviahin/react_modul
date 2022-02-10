import {Routes, Route} from "react-router-dom"

import './App.css';
import Header from "./Components/Header/Header";
import MoviesList from "./Components/MoviesList/MoviesList";
import NotFoundPage from './pages/NotFoundPade/NotFoundPade'
import GenreBadge from "./Components/GenreBadge/GenreBadge";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Header/>}>

                <Route index element={<MoviesList/>}/>
                <Route path={'GenreBadge'} element={<GenreBadge/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
        </Routes>
);
}

export default App;
