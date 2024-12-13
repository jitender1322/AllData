import { configureStore } from "@reduxjs/toolkit";
import Counter from "../features/Slice";
import todoSlice from "../features/TodoSlice";
import apiSlice from "../features/ApiSlice";

export const store = configureStore({
  reducer: {
    CounterKey: Counter,
    TodoKey: todoSlice,
    ApiKey: apiSlice,
  },
});
