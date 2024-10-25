import { createSlice } from "@reduxjs/toolkit";
import { addExp } from "./AddExpense";

const budgetSlice = createSlice({
    name: 'budget',
    initialState: { amount: 0 },
    reducers: {
        addBudget: (state, action) => {
            state.amount += action.payload;
        }
    },
    extraReducers: (builder => {
        builder.addCase(addExp, (state, action) => {
            state.amount -= action.payload.count
        })
    })
})

export default budgetSlice.reducer;
export const { addBudget } = budgetSlice.actions;