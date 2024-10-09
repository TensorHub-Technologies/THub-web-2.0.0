import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isDarkMode:true
}

export const modeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleMode:(state)=>{
            state.isDarkMode=!state.isDarkMode;
        }
    }
})

export const {toggleMode}=modeSlice.actions;
export default modeSlice.reducer;