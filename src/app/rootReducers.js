import { combineReducers } from "@reduxjs/toolkit";
import watchListReducer from "../features/todo/watchListSlice";
import completedListReducer from "../features/todo/completedListSlice";

const rootReducer = combineReducers ({
    watchList : watchListReducer,
    completedList :completedListReducer,
})

export default rootReducer;