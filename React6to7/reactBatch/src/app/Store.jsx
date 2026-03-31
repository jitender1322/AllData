import { configureStore } from "@reduxjs/toolkit";
import { Counter } from "../features/CounterSlice";

export const store = configureStore({
  reducer: {
    CounterKey : Counter
  },
});
