import { createSlice } from "@reduxjs/toolkit";


export const Counter = createSlice({
    name : "Counter",
    initialState:{count : 0},
    reducers:{
        increment : (state,action)=>{
            state.count +=1
        },
        decrement : (state,action)=>{
            state.count -=1
        }
    }
})

export default Counter.reducer
export const {increment,decrement} = Counter.actions