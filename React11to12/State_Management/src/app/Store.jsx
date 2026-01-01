import { configureStore } from "@reduxjs/toolkit"
import  Counter from "../features/CounterSlice"
import  todo  from "../features/TodoSlice"
import  api  from "../features/ApiSliceComplete"


export const store = configureStore({
    reducer:{
        CounterKey : Counter,
        TodoKey : todo,
        ApiKey : api,

    }
})