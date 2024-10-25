import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/CounterSlice";
import todo from "../features/TodoSlice";
import Api from "../features/ApiSlice";


export const store = configureStore({
    reducer: {
        counterKey: counter,
        todoKey: todo,
        apiKey: Api,
    }
});