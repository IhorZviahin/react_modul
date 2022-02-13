import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../services/movie.service";

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_,{rejectWithValue}) => {
        try {
            const movies = await movieService.getAll();
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        status: null, error: null
    },
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload

        }
    }

});

const moviesReduser = moviesSlice.reducer;

export default moviesReduser