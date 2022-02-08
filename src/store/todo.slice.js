import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id:new Date().getTime(),name: action.payload.todo, status: false})
        }
    }
});

const todoReducer = todoSlice.reducer;

export const {addTodo} = todoSlice.actions;

export default todoReducer;