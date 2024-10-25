import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expense',
    initialState: { expList: [] },
    reducers: {
        addExp: (state, action) => {
            state.expList.push(action.payload);
        }
    }
})

export default expenseSlice.reducer;
export const { addExp } = expenseSlice.actions;