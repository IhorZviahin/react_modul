import {configureStore} from "@reduxjs/toolkit";
import moviesReduser from "./movies.slice";


const store = configureStore({
    reducer: {
        moviesReduser
    }
})

export default store