import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const res = response.json();
    console.log(res);
    return res
})


export const todo = createSlice({
    name: "todo",
    initialState: { data: [], loading: true },
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload)
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(fetchData.fulfilled, (state, action) => {
                console.log("data found");

                state.loading = false,
                    state.data = action.payload
            })
    })
})

export const { addData } = todo.actions;
export default todo.reducer;