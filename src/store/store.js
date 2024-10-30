import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./modeSlice.js";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  customization: themeReducer,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
