import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false})
        },
        changeStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.status = !todo.status
        },
        deletetodo:(state, action)=>{
            const tododelete = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos.splice(tododelete, 1)
        }
    }
});

const todoReducer = todoSlice.reducer;

export const {addTodo, changeStatus,deletetodo} = todoSlice.actions;

export default todoReducer;