import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {carService} from "../service";

const initialState = {
    cars: []
}

const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        const cars = await carService.getAll();
        return cars
    }
)


const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: {}
});

const carReducer = createSlice.reducer;

export default carReducer