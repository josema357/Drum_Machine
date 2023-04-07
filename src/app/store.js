import { configureStore } from "@reduxjs/toolkit";
import powerSlice from "../reducers/powerSlice";

const store=configureStore({
    reducer: {
        power: powerSlice,
    },
})

export default store;
