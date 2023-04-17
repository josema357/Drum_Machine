import { createSlice } from "@reduxjs/toolkit"

const initialState={
    sound: false
}
export const soundSlice=createSlice({
    name: "sound",
    initialState: initialState,
    reducers: {
        soundToogle: (state)=>{
            state.sound=!state.sound;
        }
    }
})

export const { soundToogle }=soundSlice.actions;
export default soundSlice.reducer;