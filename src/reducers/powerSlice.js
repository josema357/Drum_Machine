import { createSlice } from "@reduxjs/toolkit"

const initialState={
    power: false
}
export const powerSlice=createSlice({
    name: "power",
    initialState: initialState,
    reducers: {
        powerToogle: (state, action)=>{
            state.power=!state.power;
        }
    }
})

export const { powerToogle }=powerSlice.actions;
export default powerSlice.reducer;