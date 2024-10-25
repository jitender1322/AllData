import { configureStore } from "@reduxjs/toolkit";
import counter from "../feature/CounterSlice";
import todo from "../feature/Todoslice";


export const store = configureStore({
    reducer: {
        counterKey: counter,
        todoKey: todo
    }
})