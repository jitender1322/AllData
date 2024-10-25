import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    let res = response.data
    return res
})


export const Api = createSlice({
    name: "Api",
    initialState: { data: [], loading: true },
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchApi.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
    })
})

export default Api.reducer;