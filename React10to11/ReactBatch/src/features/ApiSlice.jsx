import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchApi = createAsyncThunk("fetchApi", async()=>{
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
})


export const ApiSlice = createSlice({
    name : "ApiSlice",
    initialState : {data : null,loading : true},
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(FetchApi.pending,(state,action)=>{
            state.loading = true
        }),
        builder.addCase(FetchApi.fulfilled,(state,action)=>{
            console.log(action.payload);
            
            state.loading = false
            state.data = action.payload
        })
    }
})

export default ApiSlice.reducer