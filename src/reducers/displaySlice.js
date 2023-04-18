import { createSlice } from "@reduxjs/toolkit";

const initialState={
    text: "OFF",
}
export const displaySlice=createSlice({
    name: "display",
    initialState: initialState,
    reducers: {
        textDisplay: (state,action)=>{
            state.text=action.payload;
        }
    }
})

export const { textDisplay }=displaySlice.actions;
export default displaySlice.reducer;