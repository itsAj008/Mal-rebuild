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
                id : action.payload.id ,
                title : action.payload.title,
                picture_url : action.payload.picture_url || " ",
                myanimelist_url : action.payload.myanimelist_url,
                completed : false
            }
         
            state.completedList.push(anime);
        },
        removeCompleted : (state,action) => {
            state.completedList = state.completedList.filter((anime) => {
                console.log(anime.id)
                console.log(action.payload)

                return anime.id !== action.payload

            }
               
            )
         },
      
    }
})

export const {addCompleted , removeCompleted} = completedListSlice.actions
export default completedListSlice.reducer