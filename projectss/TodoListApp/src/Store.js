import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/TodoSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
