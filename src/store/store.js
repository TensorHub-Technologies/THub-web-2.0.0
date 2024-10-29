import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./modeSlice.js"

const store=configureStore({
    reducer:{
        customization:themeReducer
    }
})

export default store;