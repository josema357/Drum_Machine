import { combineReducers, configureStore } from "@reduxjs/toolkit";
import powerSlice from "../reducers/powerSlice";
import soundSlice from "../reducers/soundSlice";

const rootReducer=combineReducers({
    power: powerSlice,
    sound: soundSlice
})
const store=configureStore({
    reducer: rootReducer,
})

export default store;
