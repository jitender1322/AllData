import { configureStore } from "@reduxjs/toolkit";
import Budget from "../Features/Budget";
import AddExpense from "../Features/AddExpense";
export const store = configureStore({
    reducer: {
        budgetkey: Budget,
        expensekey: AddExpense,
    }
});