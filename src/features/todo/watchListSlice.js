import {createSlice,nanoid} from '@reduxjs/toolkit';


const initialState = {
    watchList:[{
        id:1,
        text:"Black clover",
        completed: false
    }]
}

export const watchListSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers : {
        addWatchlist:(state,action) => {
            const anime = {
                id:nanoid(),
                text:action.payload,
                completed:false
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
                (anime.id === action.payload.id) ? { ...anime, text: action.payload.text } : anime
            ));
        },

    }

})


export const {addWatchlist,removeWatchlist,updateWatchlist} = watchListSlice.actions;

export default watchListSlice.reducer