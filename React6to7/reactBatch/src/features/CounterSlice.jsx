import { createSlice } from "@reduxjs/toolkit";

export const Counter = createSlice({
  name: "Counter",
  initialState: { data: [] },
  reducer: {
    addData: (state, action) => {
      state.data.push();
    },
    deleteData : (state,action)=>{
    
    }
  },
});


export {addData} = Counter.action
export default Counter.reducer;
