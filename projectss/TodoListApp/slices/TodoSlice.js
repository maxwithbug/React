import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push({ id: state.todoList.length + 1, text: action.payload.todoText, completed: false });
        },
        editTodo: (state, action) => {
            state.todoList = state.todoList.map(t =>
                t.id === action.payload.id ? { ...t, text: action.payload.todoText } : t
            );
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(t => t.id !== action.payload.id);
        },
        finishTodo: (state, action) => {
            state.todoList = state.todoList.map(t =>
                t.id === action.payload.id ? { ...t, completed: action.payload.completed } : t
            );
        },
    }
});

export default todoSlice.reducer;
export const { addTodo, editTodo, deleteTodo, finishTodo } = todoSlice.actions;
