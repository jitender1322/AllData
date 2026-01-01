import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name : "todo",
    initialState : {record : []},
    reducers : {
        addData : (state,action)=>{
            state.record.push(action.payload)
        },
        deleteData : (state,action)=>{
           let newData = state.record.filter((item)=>item.id!=action.payload)
           state.record=newData
        },
        updateData : (state,action)=>{
            let singleData = state.record.find((item) => item.id == action.payload.id);
            singleData.name = action.payload.data.name
            singleData.age = action.payload.data.age
        },
    }
})

export default todo.reducer
export const {addData,deleteData,updateData} = todo.actions