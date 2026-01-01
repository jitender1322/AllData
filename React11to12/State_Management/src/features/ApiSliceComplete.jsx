import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const response = await axios.get("http://localhost:5000/users");
  return response.data;
});

export const addData = createAsyncThunk("api/addData", async (newData) => {
  const response = await axios.post("http://localhost:5000/users", newData);
  return response.data;
});

export const updateData = createAsyncThunk(
  "api/updateData",
  async ({editIndex,formData}) => {
    const response = await axios.put(
      `http://localhost:5000/users/${editIndex}`,
      formData
    );
    return response.data;
  }
);

export const deleteData = createAsyncThunk("api/deleteData", async (id) => {
  await axios.delete(`http://localhost:5000/users/${id}`);
  return id;
});

export const api = createSlice({
  name: "api",
  initialState: { record: [], loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.record = [];
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.record = action.payload;
      state.loading = false;
    });

    builder.addCase(updateData.fulfilled, (state, action) => {
      let singleData = state.record.find(
        (item) => item.id == action.payload.id
      );

      if (singleData) {
        singleData.name = action.payload.name;
        singleData.email = action.payload.email;
        singleData.password = action.payload.password;
      }
    });

    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.record = state.record.filter((item) => item.id !== action.payload);
    });
  },
});

export default api.reducer;
