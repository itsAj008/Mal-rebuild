import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    completedList : []
}

export const completedListSlice = createSlice({
    name : "completedList",
    initialState,
    reducers : {
        addCompleted : (state, action) => {
            const anime = {
                id : action.payload.id,
                text: action.payload.text
            }
            state.completedList.push(anime);
        },
        removeCompleted : (state,action) => {
            state.completedList = state.completedList.filter((anime) => 
               anime.id !== action.payload
            )
         },
      
    }
})

export const {addCompleted , removeCompleted} = completedListSlice.actions
export default completedListSlice.reducer