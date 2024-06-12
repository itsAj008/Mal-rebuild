import {createSlice,nanoid} from '@reduxjs/toolkit';


const initialState = {
    watchList:[]
}

export const watchListSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers : {
        addWatchlist:(state,action) => {
            console.log('added')
            const anime = {
                id : action.payload.myanimelist_id || nanoid(),
                title : action.payload.title,
                picture_url : action.payload.picture_url || " ",
                myanimelist_url : action.payload.myanimelist_url,
                completed : false
            }
         
            state.watchList.push(anime)
        },
        removeWatchlist:(state, action) =>{
            state.watchList = state.watchList.filter((anime) => (
                anime.id !== action.payload
            ))
        },
        updateWatchlist: (state, action) => {
            state.watchList = state.watchList.map((anime) => (
                (anime.id === action.payload.id) ? { ...anime, title: action.payload.title } : anime
            ));
        },

    }

})


export const {addWatchlist,removeWatchlist,updateWatchlist} = watchListSlice.actions;

export default watchListSlice.reducer