import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/CounterSlice";
import  TodoSlice  from "../features/TodoSlice";
import  ApiSlice  from "../features/apiSlice";


export const store = configureStore({
    reducer : {
        counterKey : counterSlice,
        todoKey : TodoSlice,
        apiKey : ApiSlice
    }
})