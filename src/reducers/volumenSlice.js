import { createSlice } from "@reduxjs/toolkit"

export const volumeSlice=createSlice({
    name: "volume",
    initialState: 0.3,
    reducers: {
        setVolume: (state,action)=>{
            return action.payload;
        }
    }
})

export const { setVolume }=volumeSlice.actions;
export default volumeSlice.reducer;