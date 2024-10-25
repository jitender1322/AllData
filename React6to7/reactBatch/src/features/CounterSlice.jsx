import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    return data;
})

export const Counter = createSlice({
    name: "Counter",
    initialState: { products: [], loading: false },
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(fetchData.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
    })
})

export default Counter.reducer;