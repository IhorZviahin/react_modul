import {createSlice} from "@reduxjs/toolkit";


const  carSlice = createSlice({
    name: 'carSlice',
    initialState:{
        cars:[]
    },
    reducers:{
        addCar:(state,action)=>{},
        delateCar:(state,action)=>{}
    }
})

const carReducer = carSlice.reducer

export const {addCar, delateCar} = carSlice.actions;
export default carReducer