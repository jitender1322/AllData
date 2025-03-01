// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchApi = createAsyncThunk("fetchApi", async () => {
//   let response = await axios.get("https://fakestoreapi.com/products");
//   console.log(response.data);
//   return response.data;
// });

// export const apiSlice = createSlice({
//   name: "apiSlice",
//   initialState: { record: [], loading: true },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchApi.fulfilled, (state, action) => {
//       console.log("fullfilled");

//       state.loading = false;
//       state.record = action.payload;
//     }),
//       builder.addCase(fetchApi.pending, (state, action) => {
//         console.log("pending");
//         state.loading = true;
//       });
//   },
// });

// export default apiSlice.reducer;
