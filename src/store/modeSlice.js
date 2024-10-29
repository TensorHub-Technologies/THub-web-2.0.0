import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("isDarkMode");
  return savedTheme ? JSON.parse(savedTheme) : false;
};

const initialState = {
  isDarkMode: getInitialTheme(),
};

export const modeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", JSON.stringify(state.isDarkMode));
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
