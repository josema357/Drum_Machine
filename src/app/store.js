import { combineReducers, configureStore } from "@reduxjs/toolkit";
import powerSlice from "../reducers/powerSlice";
import soundSlice from "../reducers/soundSlice";
import displaySlice from "../reducers/displaySlice";

const rootReducer=combineReducers({
    power: powerSlice,
    sound: soundSlice,
    display: displaySlice
})
const store=configureStore({
    reducer: rootReducer,
})

export default store;
